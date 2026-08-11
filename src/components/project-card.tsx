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
      <div className="relative flex h-full w-full flex-col items-start rounded-md p-4">
        <div className="mb-1 inline-flex w-full gap-4 sm:mb-0">
          <h1 className="mr-auto text-nowrap font-mono font-semibold text-foreground/80 text-xl transition-colors group-focus-within:text-chart-1 group-hover:text-chart-1">
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
          width={450}
          height={256}
          breakpoints={[450, 768]}
          className="pointer-events-none relative mt-3 w-full items-center bg-background/30 object-fill"
        />
        <p className="animated-underline mt-2 flex items-center gap-1 place-self-end font-medium text-foreground">
          See more
          <ArrowRight className="h-4.5 w-4.5 transition-colors group-focus-within:text-chart-1 group-hover:text-chart-1" />
        </p>
      </div>
    </LinkMotion>
  )
}
