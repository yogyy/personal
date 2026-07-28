import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { m } from 'motion/react'
import { DocsPageHeader } from '#/components/mdx/header.tsx'
import { ProjectCard } from '#/components/project-card.tsx'
import { fadeUp } from '#/lib/motion'

export const Route = createFileRoute('/projects/')({
  component: ProjectRoute,
  loader: () => allProjects,
  head: () => ({
    meta: [{ title: 'projects - yogyy' }],
  }),
})

const list = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const item = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
}

function ProjectRoute() {
  const projects = Route.useLoaderData()

  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 md:mt-16 md:px-12">
      <m.div
        initial={{ filter: 'opacity(0)' }}
        animate={{ filter: 'opacity(1)' }}
        transition={{ ...fadeUp.transition, delay: 0.15, ease: 'easeIn' }}
      >
        <DocsPageHeader
          heading="Showcase of my works"
          text="Explore my projects and get to know more about my work and skills."
        />
      </m.div>
      <m.ul
        variants={list}
        initial="initial"
        animate="animate"
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects?.map((project) => (
          <m.li
            key={project._meta.path}
            variants={item}
            className="project-card"
          >
            <ProjectCard project={project} />
          </m.li>
        ))}
      </m.ul>
    </div>
  )
}
