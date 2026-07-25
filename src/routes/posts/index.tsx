import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { m } from 'motion/react'
import { DocsPageHeader } from '#/components/mdx/header.tsx'
import { fadeUp } from '#/lib/motion.ts'

export const Route = createFileRoute('/posts/')({
  component: ProjectRoute,
  loader: () => allPosts,
})

function ProjectRoute() {
  const posts = Route.useLoaderData()

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 md:mt-16">
      <m.div
        initial={{ filter: 'opacity(0)' }}
        animate={{ filter: 'opacity(1)' }}
        transition={{ ...fadeUp.transition, delay: 0.15, ease: 'easeOut' }}
      >
        <DocsPageHeader
          heading="Showcase of my works"
          text="Explore my projects and get to know more about my work and skills."
        />
      </m.div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <li key={post.title} className="flex">
            <Link
              to={`/posts/$postId`}
              params={{ postId: post._meta.path }}
              className="border border-accent rounded p-2"
            >
              <div className="relative w-full">
                <h1 className="text-lg md:text-[1.25em]">{post.title}</h1>
                <p className="text-foreground/70">{post.description}</p>
              </div>
              <p className="text-xs text-foreground/40">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
