import { ProjectCardSimple as SimpleProject } from '@/constants/simple-project';
import { Globe } from './icons/internal';
import { Github } from './icons/simple-icons';
import UnstyledLink from './links/unstyledlink';

const ProjectCardSimple = ({ project }: { project: SimpleProject }) => {
  const { title, description, github, url, type } = project;

  return (
    <li className="group relative flex h-fit w-full select-none break-inside-avoid-column flex-col gap-3 rounded-md border bg-card/40 p-3.5 transition-[border-color] duration-300 ease-linear focus-within:border-accent/50 hover:border hover:border-accent/50 md:gap-6">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-text/70 transition-colors duration-300 group-focus-within:text-accent group-hover:text-accent">
          {title}
        </h3>
        <div className="flex gap-2 text-lg">
          {github ? (
            <UnstyledLink
              className="group/link rounded-full bg-background outline-none hover:bg-primary/5 focus:bg-primary/5"
              href={github}
            >
              <Github className="h-7 w-7 fill-text/70 p-1 group-hover/link:fill-primary group-focus/link:fill-primary" />
            </UnstyledLink>
          ) : null}
          {url ? (
            <UnstyledLink
              className="group/link rounded-full bg-background outline-none hover:bg-primary/5 focus:bg-primary/5"
              href={url}
            >
              <Globe className="h-7 w-7 p-1 text-text/70 group-hover/link:text-primary group-focus/link:text-primary" />
            </UnstyledLink>
          ) : null}
        </div>
      </div>
      <p className="text-[14px] text-text/80">{description}</p>
      <ul className="mt-1 flex flex-wrap gap-1.5">
        {type.map(item => (
          <li
            className="select-none rounded-2xl bg-secondary/30 px-1.5 py-0.5 text-xs text-text/50"
            key={item}
          >
            <code>{item}</code>
          </li>
        ))}
      </ul>
    </li>
  );
};

export { ProjectCardSimple };
