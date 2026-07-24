import { createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { MdxContent } from '#/components/mdx'

export const Route = createFileRoute('/posts/$postId')({
  loader: ({ params }) => {
    const post = allPosts.find((p) => p._meta.path === params.postId)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.title,
      },
      {
        name: 'description',
        content: loaderData?.description,
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData()
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6">
      <MdxContent code={post.mdx} />
    </div>
  )
}
