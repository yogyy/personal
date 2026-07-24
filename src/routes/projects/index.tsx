import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { domAnimation, LazyMotion, motion } from 'motion/react'
import * as m from 'motion/react-m'
import { DocsPageHeader } from '#/components/mdx/header.tsx'
import { ProjectCard } from '#/components/project-card.tsx'
import { fadeUp, REVEAL_EASE } from '#/lib/motion'

export const Route = createFileRoute('/projects/')({
  component: ProjectRoute,
  loader: () => allProjects,
  head: () => ({
    meta: [
      {
        title: 'projects - yogyy',
      },
    ],
  }),
})

function ProjectRoute() {
  const projects = Route.useLoaderData()

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 md:mt-16">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ filter: 'blur(10px)' }}
          animate={{ filter: 'none' }}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
        >
          <DocsPageHeader
            heading="Showcase of my works"
            text="Explore my projects and get to know more about my work and skills."
          />
        </m.div>
      </LazyMotion>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project) => (
          <ProjectCard key={project._meta.path} project={project} />
        ))}
      </ul>
    </div>
  )
}
