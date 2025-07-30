import Link from 'next/link';
import {
  Hono,
  Mongodb,
  Nextdotjs,
  Nodedotjs,
  React,
  Reactquery,
  Shadcnui,
  Sqlite,
  Svelte,
  Tailwindcss,
  Upstash,
} from './icons/simple-icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechMdx({ techs }: TechIconsProps) {
  return (
    <ul className="flex w-fit flex-wrap gap-2">
      {techs.map(tech => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <li className="h-fit w-fit p-2 text-xl" key={current.name}>
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={current.link} className="group outline-none" target="_blank">
                    <current.icon className="h-6 w-6 transition-colors duration-200 group-hover:text-primary group-focus:text-primary" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent sideOffset={8} className="duration-300">
                  <p>{current.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: React,
    name: 'React',
    link: 'https://react.dev/',
  },
  nodejs: {
    icon: Nodedotjs,
    name: 'Node JS',
    link: 'https://nodejs.org/en',
  },
  nextjs: {
    icon: Nextdotjs,
    name: 'Next JS',
    link: 'https://nextjs.org/',
  },
  hono: {
    icon: Hono,
    name: 'Hono',
    link: 'https://hono.dev/',
  },
  sqlite: {
    icon: Sqlite,
    name: 'SQLite',
    link: 'https://www.sqlite.org/index.html',
  },
  sveltekit: {
    icon: Svelte,
    name: 'SvelteKit',
    link: 'https://svelte.dev/docs/kit/introduction',
  },
  tailwindcss: {
    icon: Tailwindcss,
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  mongodb: {
    icon: Mongodb,
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
  },
  shadcnui: {
    icon: Shadcnui,
    name: 'shadcn/ui',
    link: 'https://ui.shadcn.com/',
  },
  reactquery: {
    icon: Reactquery,
    name: 'React Query',
    link: 'https://tanstack.com/',
  },
  upstash: {
    icon: Upstash,
    name: 'Upstash',
    link: 'https://upstash.com/',
  },
};
