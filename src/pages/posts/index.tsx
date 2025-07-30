import { allPosts } from 'contentlayer/generated';
import { m } from 'framer-motion';
import Link from 'next/link';
import { RootLayout } from '@/components/layouts/root-layout';
import { DocsPageHeader } from '@/components/mdx/page-header';
import { easeInoutQuad } from '@/constants/framer-easing';

export default function Page() {
  return (
    <RootLayout title="Post - Yogyy" desc="showing all my post i created">
      <div className="layout mt-20 flex min-h-[calc(100dvh_-_303px)] flex-col gap-4">
        <DocsPageHeader
          heading="A Small Blog"
          text="Explore my collection of insightful(hope so) articles."
        />
        <m.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ easings: easeInoutQuad, duration: 0.7 }}
          className="flex max-w-3xl flex-col gap-5"
        >
          {allPosts.map(post => (
            <li key={post._id}>
              <Link
                href={post.slug}
                className="group relative grid justify-start gap-2 rounded-sm text-foreground/80 outline-none transition-colors duration-200 focus-within:text-primary/80 hover:text-primary/50"
              >
                <div className="relative w-full">
                  <h1 className="text-lg md:text-[1.25em]">{post.title}</h1>
                  <p className="text-foreground/70">{post.description}</p>
                </div>
                <p className="text-xs text-foreground/40">{post.date}</p>
              </Link>
            </li>
          ))}
        </m.ul>
      </div>
    </RootLayout>
  );
}
