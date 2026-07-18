import SectionHeading from '../common/SectionHeading';

const BioText = () => {
  return (
    <>
      <SectionHeading heading="About" />
      <div className="space-y-5 p-8">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-base font-normal whitespace-pre-wrap text-neutral-800 md:text-base dark:text-neutral-300">
          <ul className="list-disc space-y-2">
            <li>
              I'm a{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Full Stack & DevOps Engineer
              </b>{' '}
              passionate about building scalable systems and smooth user experiences.
            </li>

            <li>
              I build modern web apps with{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                React, Next.js, TypeScript, and Tailwind
              </b>
              , focusing on clean architecture and performant design.
            </li>

            <li>
              On the DevOps side, I work with{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Docker, CI/CD, Linux, and cloud infra
              </b>{' '}
              to automate and deploy reliable systems.
            </li>

            <li>
              I enjoy turning complex problems into simple, elegant solutions — from frontend to infrastructure.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BioText;
