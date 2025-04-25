import { Project } from 'contentlayer/generated';
import Link from 'next/link';
import { Icon } from './custom-icons';
import { ArrowRight } from './icons/internal';
import CloudinaryImg from './images/cloudinary-img';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <li className="project-card group w-full overflow-hidden rounded-md border bg-card/40 transition-[border-color] duration-200 ease-in focus-within:border-accent/50 hover:border-accent/50">
      <Link
        href={project.slug}
        className="projectcard flex h-full w-full flex-col items-start rounded-md p-4 focus:outline-none"
      >
        <div className="mb-1 flex w-full flex-wrap sm:mb-0">
          <h1 className="mr-auto text-xl text-text/80 transition-colors duration-300 group-focus-within:text-accent group-hover:text-accent">
            {project.title}
          </h1>
          <div className="flex items-center gap-2 text-text">
            {project.techs?.split(', ').map(tech => <Icon key={tech} icon={tech} />)}
          </div>
        </div>
        <p className="mb-auto text-sm text-text/50">{project.description}</p>
        <CloudinaryImg
          publicId={project.banner!}
          alt={project.title}
          width={1440}
          height={720}
          preview={false}
          className="pointer-events-none relative mt-3 w-full items-center bg-background/30"
        />
        <p className="animated-underline mt-2 flex items-center gap-1 place-self-end font-medium text-text">
          See more
          <ArrowRight className="h-[18px] w-[18px] transition-colors group-focus-within:text-accent group-hover:text-accent" />
        </p>
      </Link>
    </li>
  );
};
