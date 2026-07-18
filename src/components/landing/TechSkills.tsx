import Container from '../layouts/Container';
import SectionHeading from '../common/SectionHeading';
import {
  ReactIcon,
  Bun,
  NodeJs,
  JavaScript,
  MongoDB,
  ExpressJs,
  NextJS,
  PostgreSQL,
  Prisma,
  TailwindCss,
  TypeScript,
  Git,
  Docker,
  Css,
  Html,
  Go,
  Java,
  ArgoCD,
  MySQL,
  Redis,
  Linux,
  Jenkins,
  Kubernetes,
  AWS,
  Terraform,
  Turborepo,
  Grafana,
  Flutter,
  Agile,
  Scrum,
  Helm,
} from '@/lib/techIcons';
import RepeatSeparator from '../ui/repeat-separator';

const TechSkills = () => {
  return (
    <>
      <RepeatSeparator />
      <SectionHeading heading={'Stack'} />
      <Container className="py-3">
        <div className="mt-3 flex flex-wrap justify-start gap-2 gap-y-2.5 px-4">
          {SkillsList.map((items) => {
            return (
              <a
                key={items.title}
                href={items.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-foreground flex cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300/40 bg-zinc-50 px-2 py-0.5 text-xs font-normal tracking-wide shadow-xs transition-all duration-300 select-none hover:bg-zinc-100 dark:border-neutral-800/80 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80"
              >
                <span className="flex size-3.5 shrink-0 items-center justify-center [&_svg]:size-3.5">
                  {items.icon}
                </span>
                <span className="text-foreground text-xs font-normal tracking-wide whitespace-nowrap">
                  {items.title}
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default TechSkills;

const SkillsList = [
  {
    title: 'TypeScript',
    icon: <TypeScript />,
    href: 'https://www.typescriptlang.org/',
  },
  {
    title: 'JavaScript',
    icon: <JavaScript />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    title: 'Go',
    icon: <Go />,
    href: 'https://go.dev/',
  },
  {
    title: 'Java',
    icon: <Java />,
    href: 'https://www.java.com/',
  },
  {
    title: 'HTML',
    icon: <Html />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    title: 'CSS',
    icon: <Css />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    title: 'React',
    icon: <ReactIcon />,
    href: 'https://reactjs.org/',
  },
  {
    title: 'Next.js',
    icon: <NextJS />,
    href: 'https://nextjs.org/',
  },
  {
    title: 'Flutter',
    icon: <Flutter />,
    href: 'https://flutter.dev/',
  },
  {
    title: 'Tailwind CSS',
    icon: <TailwindCss />,
    href: 'https://tailwindcss.com/',
  },
  {
    title: 'Node.js',
    icon: <NodeJs />,
    href: 'https://nodejs.org/',
  },
  {
    title: 'Express.js',
    icon: <ExpressJs />,
    href: 'https://expressjs.com/',
  },
  {
    title: 'Bun',
    icon: <Bun />,
    href: 'https://bun.sh/',
  },
  {
    title: 'PostgreSQL',
    icon: <PostgreSQL />,
    href: 'https://www.postgresql.org/',
  },
  {
    title: 'MongoDB',
    icon: <MongoDB />,
    href: 'https://www.mongodb.com/',
  },
  {
    title: 'Prisma',
    icon: <Prisma />,
    href: 'https://www.prisma.io/',
  },
  {
    title: 'Docker',
    icon: <Docker />,
    href: 'https://www.docker.com/',
  },
  {
    title: 'MySQL',
    icon: <MySQL />,
    href: 'https://www.mysql.com/',
  },
  {
    title: 'Redis',
    icon: <Redis />,
    href: 'https://redis.io/',
  },
  {
    title: 'Linux',
    icon: <Linux />,
    href: 'https://www.linux.org/',
  },
  {
    title: 'Jenkins',
    icon: <Jenkins />,
    href: 'https://www.jenkins.io/',
  },
  {
    title: 'Kubernetes',
    icon: <Kubernetes />,
    href: 'https://kubernetes.io/',
  },
  {
    title: 'Helm',
    icon: <Helm />,
    href: 'https://helm.sh/',
  },
  {
    title: 'AWS',
    icon: <AWS />,
    href: 'https://aws.amazon.com/',
  },
  {
    title: 'Terraform',
    icon: <Terraform />,
    href: 'https://www.terraform.io/',
  },
  {
    title: 'Argo CD',
    icon: <ArgoCD />,
    href: 'https://argo-cd.readthedocs.io/',
  },
  {
    title: 'Turborepo',
    icon: <Turborepo />,
    href: 'https://turbo.build/repo',
  },
  {
    title: 'Grafana',
    icon: <Grafana />,
    href: 'https://grafana.com/',
  },
  {
    title: 'Git',
    icon: <Git />,
    href: 'https://git-scm.com/',
  },
  {
    title: 'Agile',
    icon: <Agile />,
    href: 'https://www.atlassian.com/agile',
  },
  {
    title: 'Scrum',
    icon: <Scrum />,
    href: 'https://www.scrum.org/',
  },
];
