import { Image } from '@unpic/react'
import type { Project } from 'content-collections'
import { ArrowRight } from './icons/internal/arrow-right'
import { LinkMotion } from './link-motion'
import { Icon } from './project-card-icon'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <LinkMotion to={`/projects/${project._meta.path}`}>
      <div className="flex h-full w-full flex-col items-start rounded-md p-4">
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
          <ArrowRight className="h-4.5 w-4.5 transition-colors group-focus-within:text-chart-1 group-hover:text-chart-1" />
        </p>
      </div>
    </LinkMotion>
  )
}
