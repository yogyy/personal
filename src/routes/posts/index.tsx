import { createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { m } from 'motion/react'
import { LinkMotion } from '#/components/link-motion.tsx'
import { DocsPageHeader } from '#/components/mdx/header.tsx'
import { fadeUp } from '#/lib/motion.ts'

export const Route = createFileRoute('/posts/')({
  component: ProjectRoute,
  loader: () => allPosts,
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
  const posts = Route.useLoaderData()

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
        className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {posts?.map((post) => (
          <m.li
            key={post.title}
            variants={item}
            className="group flex rounded-lg border border-accent bg-background outline-none hover:cursor-pointer"
          >
            <LinkMotion
              to={`/posts/${post._meta.path}`}
              className="flex w-full flex-col space-y-2.5 p-3"
            >
              <p className="text-foreground/40 text-xs">{post.date}</p>

              <div className="relative w-full">
                <h1 className="text-lg md:text-[1.25em]">{post.title}</h1>
                <p className="text-foreground/70">{post.description}</p>
              </div>
            </LinkMotion>
          </m.li>
        ))}
      </m.ul>
    </div>
  )
}
