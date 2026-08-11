import { createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { m } from 'motion/react'
import { LinkMotion } from '#/components/link-motion.tsx'
import { DocsPageHeader } from '#/components/mdx/header.tsx'
import { fadeUp } from '#/lib/motion.ts'

export const Route = createFileRoute('/posts/')({
  component: ProjectRoute,
  loader: () => allPosts,
  head: () => ({
    meta: [{ title: 'yogyy/posts · Web Developer' }],
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
  const posts = Route.useLoaderData()

  return (
    <div className="mx-auto pt-8">
      <m.div
        initial={{ filter: 'opacity(0)' }}
        animate={{ filter: 'opacity(1)' }}
        transition={{ ...fadeUp.transition, delay: 0.15, ease: 'easeIn' }}
      >
        <DocsPageHeader heading="Posts" text="Some of my posts" />
      </m.div>
      <div className="absolute left-0 mt-1.75 w-full border-t-2"></div>
      <m.ul
        variants={list}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-3"
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
