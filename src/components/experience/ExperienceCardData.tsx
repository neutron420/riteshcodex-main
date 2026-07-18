import NextJS from "@/components/icons/tech/NextJS";
import TypeScript from "@/components/icons/tech/TypeScript";
import JavaScript from "@/components/icons/tech/JavaScript";
import TailwindCss from "@/components/icons/tech/TailwindCss";

import type { Experience } from "./types";

const ExperienceCardData: Experience[] = [
  {
    id: "zomind",
    companyName: "Zomind.ai",
    companyWebsite: "https://zomind.ai",
    isCurrentEmployer: false,
    positions: [
      {
        id: "software-engineer-intern",
        title: "Software Engineer Intern",
        employmentType: "Internship",
        employmentPeriod: {
          start: "April 2026",
          end: "June 2026",
        },
        duration: "3m",
        location: "Remote",
        description: `Contributed to core product development with a focus on frontend engineering using Next.js and TypeScript, building responsive, accessible UI components and optimizing rendering performance across the platform.
Designed and implemented CI/CD automation pipelines using Jenkins, reducing deployment cycle time and enabling consistent, repeatable releases across staging and production environments.
Built a real-time sales dashboard integrating internal business metrics, enabling live visibility into key performance indicators for the sales and engineering teams.`,
        skills: [
          {
            name: "Next.js",
            href: "https://nextjs.org/",
            icon: <NextJS />,
          },
          {
            name: "TypeScript",
            href: "https://www.typescriptlang.org/",
            icon: <TypeScript />,
          },
          {
            name: "JavaScript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            icon: <JavaScript />,
          },
          {
            name: "TailwindCSS",
            href: "https://tailwindcss.com/",
            icon: <TailwindCss />,
          },
        ],
        isExpanded: true,
      },
    ],
  },
];

export default ExperienceCardData;
