import { HTMLMotionProps, m } from 'framer-motion';
import { CodeXml, Terminal } from '@/components/icons/internal';
import { easeOutquad } from '@/constants/framer-easing';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface SkillSectionProps extends HTMLMotionProps<'article'> {
  inView?: boolean;
}

export const SkillSection = ({ className, inView, ...props }: SkillSectionProps) => {
  return (
    <m.article
      initial="hidden"
      animate={inView && 'show'}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.15,
            duration: 0.3,
            easings: easeOutquad,
          },
        },
      }}
      className={className}
      {...props}
    >
      <h1 className="text-accent">Skills</h1>
      <div id="skill" className="mt-6">
        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <m.div
            variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
            transition={{ easings: easeOutquad }}
            className="relative flex h-max max-h-[260px] flex-1 flex-col justify-between gap-4 overflow-hidden rounded-md border bg-card/40 p-4"
          >
            <div className="flex flex-row items-center gap-3">
              <CodeXml className="h-6 w-6 shrink-0 text-accent" />
              <h2 className="text-lg lg:text-xl">Web development</h2>
            </div>
            <p className="text-sm sm:text-base">
              I have experience in web development, specializing in React and Next.js, with strong
              proficiency in HTML, CSS, JavaScript, and TypeScript
            </p>
          </m.div>
          <m.div
            variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
            transition={{ easings: easeOutquad }}
            className="flex max-h-[260px] flex-1 flex-col gap-4 overflow-hidden rounded-md border bg-card/40 p-4"
          >
            <div className="flex flex-row flex-nowrap items-center gap-3">
              <Terminal className="h-6 w-6 shrink-0 text-accent" />
              <h3 className="text-lg lg:text-xl">Other technologies</h3>
            </div>
            <div className="text-sm sm:text-base">
              Familiar with and frequent user of common software development tools, such as git.
            </div>
            <div className="text-sm sm:text-base">
              Know how to utilise assistive
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger className="mx-1 underline decoration-accent decoration-2">
                    technologies
                  </TooltipTrigger>
                  <TooltipContent sideOffset={8} className="bg-card/90">
                    <p className="px-1 text-xs text-text">
                      Yes, they are
                      <br /> Google, <br /> StackOverflow <br /> and ChatGPT!
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              to enhance productivity.
            </div>
          </m.div>
        </div>
      </div>
    </m.article>
  );
};
