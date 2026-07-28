import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { allProjects } from 'content-collections'
import { LinkIcon, UserRound } from '#/components/icons/internal'
import { GithubIcon } from '#/components/icons/simple-icons'
import { MdxContent } from '#/components/mdx'
import { DashboardTableOfContents } from '#/components/mdx/toc.tsx'
import { getTableOfContentsSimple } from '#/lib/toc.ts'

export const Route = createFileRoute('/projects/$projectId')({
  component: RouteComponent,
  loader: ({ params }) => {
    const post = allProjects.find((p) => p._meta.path === params.projectId)
    if (!post) throw notFound()
    return post
  },
})

function RouteComponent() {
  const project = Route.useLoaderData()
  const toc = getTableOfContentsSimple(project.content)

  if (toc.length === 0) return null
  return (
    <section className="mx-auto my-4 max-w-7xl px-6 md:px-12">
      <div>
        <Image
          alt={`Project ${project.description}`}
          className="rounded shadow"
          src={project.banner}
          priority
          breakpoints={[384, 640, 960, 1280, 1668, 1920]}
          width={1440}
          height={730}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-4xl text-primary">
          {project.title}
        </h1>
        <p className="mt-2 text-foreground text-sm">{project.description}</p>
        <div className="mt-2 flex flex-wrap items-center justify-start gap-3 font-medium text-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <UserRound className="h-4.5 w-4.5" />
            <p className="flex items-center justify-start gap-2 text-sm transition-colors duration-300">
              {project.category}
            </p>
          </div>
          <span>-</span>
          <div className="inline-flex items-center gap-1.5">
            <GithubIcon className="text-lg" />
            <Link
              className="animated-underline inline-flex items-center border-accent border-b border-dotted font-medium focus:outline-none"
              to={project.github}
            >
              Repository
            </Link>
          </div>
          <span>-</span>
          <div className="inline-flex items-center gap-1.5">
            <LinkIcon className="h-4.5 w-4.5" />
            <Link
              className="animated-underline inline-flex items-center border-accent border-b border-dotted font-medium focus:outline-none"
              to={project.url}
            >
              Open Live Site
            </Link>
          </div>
          <div className="ml-auto flex flex-wrap gap-1">
            {project.techs?.split(', ').map((tech) => (
              <code
                className="pointer-events-none relative rounded bg-secondary/30 p-0.5 px-[0.3rem] py-[0.2rem] font-mono text-xs sm:text-sm"
                key={tech}
              >
                {tech.toLowerCase()}
              </code>
            ))}
          </div>
        </div>
        <hr className="mt-1 border" />
        <div className="py-6 lg:grid lg:grid-cols-[auto_250px] lg:gap-8">
          <article className="h-full w-full min-w-0 max-w-5xl prose-headings:text-primary marker:text-primary">
            <MdxContent code={project.mdx} />
            <div className="hidden h-60 bg-transparent lg:block" />
          </article>
          <aside className="hidden h-full text-sm lg:block">
            <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              {toc && <DashboardTableOfContents toc={toc} />}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
