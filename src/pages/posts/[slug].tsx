import { allPosts } from 'contentlayer/generated';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getTableOfContents, TableOfContents } from '@/lib/toc';
import { ArrowLeft } from '@/components/icons/internal';
import { RootLayout } from '@/components/layouts/root-layout';
import { Mdx } from '@/components/mdx/mdx-component';
import { DocsPageHeader } from '@/components/mdx/page-header';
import { DashboardTableOfContents } from '@/components/mdx/toc';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map(post => post.slug);
  return { paths, fallback: false };
};

export const getStaticProps = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = allPosts.find(post => post.slugAsParams === slug);
  if (!post) notFound();

  return { props: { post } };
};

export const PostsPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [toc, setToc] = useState<TableOfContents>();
  const { back } = useRouter();

  useEffect(() => {
    const fetchToc = async () => {
      try {
        const tocData = await getTableOfContents(post.body.raw);
        setToc(tocData);
      } catch (error) {
        console.error('Error fetching table of contents:', error);
      }
    };

    fetchToc();
  }, [post.body.raw]);

  return (
    <RootLayout title={`${post.title} - Yogyy`} desc={post.description}>
      <section>
        <div className="bg-coret relative py-8">
          <div className="layout">
            <button
              onClick={() => back()}
              className="animated-underline group flex items-center gap-3 font-semibold focus:outline-none"
            >
              <ArrowLeft className="h-5 w-5 group-focus-within:text-primary group-hover:text-primary" />{' '}
              Go Back
            </button>
            <blockquote className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground">
              <p>{post.date}</p>
            </blockquote>
            <DocsPageHeader heading={post.title} text={post.description} hr />
          </div>
        </div>
        <div className="layout py-6 lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
          <article className="h-full w-full min-w-0 max-w-3xl prose-h2:text-2xl prose-h2:text-primary prose-a:text-primary">
            <Mdx code={post.body.code} />
          </article>
          <aside className="hidden h-full text-sm lg:block">
            <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              {toc && <DashboardTableOfContents toc={toc} />}
            </div>
          </aside>
        </div>
      </section>
    </RootLayout>
  );
};

export default PostsPage;
