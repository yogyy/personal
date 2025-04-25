import { Fragment } from 'react';
import {
  Drizzle,
  Javascript,
  Nextdotjs,
  Nodedotjs,
  Postgresql,
  React,
  Shadcnui,
  Sqlite,
  Tailwindcss,
  Typescript,
} from '@/components/icons/simple-icons';
import { Hono } from '../icons/simple-icons';

const techSkills = [
  'JavaScript',
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'shadcn/ui',
  'Node.js',
  'Hono',
  'Drizzle ORM',
  'PostgreSQL',
  'SQLite',
];

const ICON_TYPES = new Map(
  Object.entries({
    javascript: <Javascript className="group-hover:text-[#F7DF1E]" />,
    typescript: <Typescript className="group-hover:text-[#3178C6]" />,
    nodejs: <Nodedotjs className="group-hover:text-[#339933]" />,
    react: <React className="group-hover:text-[#61DAFB]" />,
    nextjs: <Nextdotjs className="group-hover:text-[#000000]" />,
    tailwindcss: <Tailwindcss className="group-hover:text-[#06B6D4]" />,
    shadcnui: <Shadcnui className="group-hover:text-[#000000]" />,
    hono: (
      <Hono className="[&>path:nth-child(1)]:group-hover:fill-[url(#a)] [&>path:nth-child(2)]:group-hover:fill-[#F95]" />
    ),
    postgresql: <Postgresql className="group-hover:text-[#4169E1]" />,
    drizzleorm: <Drizzle className="group-hover:text-[#C5F74F]" />,
    sqlite: <Sqlite className="group-hover:text-[#003B57]" />,
  }),
);

interface IconProps {
  type: string;
}

export function Icon({ type }: IconProps) {
  const IconComponent = ICON_TYPES.get(type.toLowerCase());
  return <Fragment>{IconComponent}</Fragment>;
}

export const TechSection = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div id="technologies" {...props}>
      <ul className="grid cursor-default grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6">
        {techSkills.map(item => (
          <li
            key={item}
            className="group flex items-center rounded-md border bg-card p-2 transition-colors hover:bg-text/10"
          >
            <span className="text-2xl text-inherit">
              <Icon type={item.replace(/[ ./]/g, '')} />
            </span>
            <span className="pl-4">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
