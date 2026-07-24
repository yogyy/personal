import { Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import type { Project } from 'content-collections'
import { ArrowRight } from './icons/internal'
import { Icon } from './project-card-icon'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="project-card group w-full overflow-hidden rounded-md border bg-card focus-within:border-chart-1/50 hover:border-chart-1/50">
      <Link
        to={project._meta.path}
        className="projectcard flex h-full w-full flex-col items-start rounded-md p-4 focus:outline-none"
      >
        <div className="mb-1 flex w-full flex-wrap sm:mb-0">
          <h1 className="mr-auto font-mono font-semibold text-foreground/80 text-xl transition-colors group-focus-within:text-chart-1 group-hover:text-chart-1">
            {project.title}
          </h1>
          <div className="flex items-center gap-2 text-foreground">
            {project.techs?.split(', ').map((tech) => (
              <Icon key={tech} icon={tech} />
            ))}
          </div>
        </div>
        <p className="mb-auto text-foreground/50 text-sm">
          {project.description}
        </p>
        <Image
          src={project.banner}
          alt={project.title}
          width={384}
          height={216}
          breakpoints={[384, 768]}
          className="pointer-events-none relative mt-3 w-full items-center bg-background/30"
        />
        <p className="animated-underline mt-2 flex items-center gap-1 place-self-end font-medium text-foreground">
          See more
          <ArrowRight className="h-[18px] w-[18px] transition-colors group-focus-within:text-chart-1 group-hover:text-chart-1" />
        </p>
      </Link>
    </li>
  )
}
