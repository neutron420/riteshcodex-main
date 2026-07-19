const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const GITHUB_USERNAME = 'neutron420';

interface GitHubResponse {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
}

interface RepoResponse {
  stargazers_count?: number;
}

export const fetchGitHubContributions = async (): Promise<number> => {
  if (!GITHUB_TOKEN) {
    return 0;
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query {
          user(login: "${GITHUB_USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
          }
        }
      `,
      }),
    });

    const data: GitHubResponse = await response.json();

    if (data.errors) {
      return 0;
    }

    return data.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;
  } catch {
    return 0;
  }
};

export const fetchRepoStars = async (): Promise<number> => {
  if (!GITHUB_TOKEN) {
    return 0;
  }

  try {
    let totalStars = 0;
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      if (!response.ok) break;

      const repos: RepoResponse[] = await response.json();
      if (repos.length === 0) break;

      for (const repo of repos) {
        totalStars += repo.stargazers_count ?? 0;
      }

      page++;
      if (repos.length < 100) hasMore = false;
    }

    return totalStars;
  } catch {
    return 0;
  }
};
