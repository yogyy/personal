import {
  Hono as HonoIcon,
  Mongodb,
  Nextdotjs,
  React,
  Reactquery,
  Shadcnui,
  Sqlite,
  Svelte,
  Tailwindcss,
  Upstash,
} from './icons/simple-icons';

const Icons: { [key: string]: React.ComponentType } = {
  NextJS: Nextdotjs,
  Tailwind: Tailwindcss,
  ReactJS: React,
  ShadcnUI: Shadcnui,
  Hono: HonoIcon,
  MongoDB: Mongodb,
  ReactQuery: Reactquery,
  Sveltekit: Svelte,
  SQLite: Sqlite,
  Upstash: Upstash,
};

interface IconProps extends React.HTMLProps<SVGSVGElement> {
  icon: keyof typeof Icons;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  const IconComponent = Icons[icon];
  return <IconComponent {...props} />;
};
