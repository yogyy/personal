import { Fragment } from 'react';
import {
  Drizzle,
  Hono,
  Javascript,
  Nextdotjs,
  Nodedotjs,
  Postgresql,
  React,
  Shadcnui,
  Sqlite,
  Svelte,
  Tailwindcss,
  Typescript,
} from '@/components/icons/simple-icons';

const techSkills = [
  { name: 'JavaScript', new: false },
  { name: 'React', new: false },
  { name: 'TypeScript', new: false },
  { name: 'Next.js', new: false },
  { name: 'Tailwind CSS', new: false },
  { name: 'shadcn/ui', new: false },
  { name: 'Node.js', new: false },
  { name: 'Hono', new: false },
  { name: 'Drizzle ORM', new: false },
  { name: 'PostgreSQL', new: false },
  { name: 'SQLite', new: false },
  { name: 'Svelte', new: true },
];

const ICON_TYPES = new Map(
  Object.entries({
    javascript: <Javascript className="transition-[color] group-hover:text-[#F7DF1E]" />,
    typescript: <Typescript className="transition-[color] group-hover:text-[#3178C6]" />,
    nodejs: <Nodedotjs className="transition-[color] group-hover:text-[#339933]" />,
    react: <React className="transition-[color] group-hover:text-[#61DAFB]" />,
    nextjs: <Nextdotjs className="transition-[color] group-hover:text-[#000000]" />,
    tailwindcss: <Tailwindcss className="transition-[color] group-hover:text-[#06B6D4]" />,
    shadcnui: <Shadcnui className="transition-[color] group-hover:text-[#000000]" />,
    hono: (
      <Hono className="transition-[color] [&>path:nth-child(1)]:group-hover:fill-[url(#a)] [&>path:nth-child(2)]:group-hover:fill-[#F95]" />
    ),
    postgresql: <Postgresql className="transition-[color] group-hover:text-[#4169E1]" />,
    drizzleorm: <Drizzle className="transition-[color] group-hover:text-[#C5F74F]" />,
    sqlite: <Sqlite className="transition-[color] group-hover:text-[#003B57]" />,
    svelte: <Svelte className="transition-[color] group-hover:text-[#ff3e00]" />,
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
            key={item.name}
            className="group relative flex items-center rounded-md border bg-card p-2 transition-colors hover:bg-secondary/50"
          >
            {item.new && (
              <span className="absolute -right-1 -top-1 rotate-12 animate-pulse text-xs text-primary">
                new
              </span>
            )}
            <span className="text-2xl text-inherit">
              <Icon type={item.name.replace(/[ ./]/g, '')} />
            </span>
            <span className="pl-4">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
