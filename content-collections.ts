import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX, type Options } from '@content-collections/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode, { type LineElement } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { z } from 'zod'

const options: Options = {
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['subheading-anchor'],
          ariaLabel: 'Link to section',
        },
      },
    ],
    [
      rehypePrettyCode,
      {
        theme: {
          dark: 'everforest-dark',
          light: 'everforest-light',
        },
        onVisitLine(element: LineElement) {
          if (element.children.length === 0) {
            element.children = [{ type: 'text', value: ' ' }]
          }
        },
      },
    ],
  ],
}

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string().nonempty(),
    description: z.string(),
    date: z.string(),
    published: z.boolean().default(true),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, options)
    return { ...document, mdx }
  },
})

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string().nonempty(),
    description: z.string(),
    category: z.string(),
    url: z.string(),
    banner: z.string(),
    techs: z.string(),
    github: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, options)
    return { ...document, mdx }
  },
})

export default defineConfig({
  content: [posts, projects],
})
