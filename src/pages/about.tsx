import { Accent } from '@/components/accent';
import { RootLayout } from '@/components/layouts/root-layout';
import TechMdx from '@/components/tech-icons';

export default function AboutPage() {
  return (
    <RootLayout title="About - Yogyy">
      <section className="layout flex h-auto min-h-[calc(90dvh_-_141px)] flex-col items-start">
        <>
          <div id="about" className="my-10 h-full">
            <h1 className="mb-6 text-2xl md:text-4xl 2xl:text-3xl">Hi, I&apos;m Yogi.</h1>
            <article className="relative mt-4 flex max-w-3xl gap-3 md:mt-6 md:gap-6">
              <div className="hidden border-l border-primary md:block" />
              <div className="h-full text-pretty text-base">
                <p className="mb-4 leading-7">
                  I live in Tangerang, Indonesia. I&apos;m interested in becoming a full-stack web
                  developer. As a naturally curious person, I am always seeking ways to improve and
                  achieve{' '}
                  <span className="font-semibold text-red-500 line-through">perfection</span>
                  &nbsp; better code in my work.They say practice makes perfect, but then again,
                  they also say that nobody&apos;s perfect, so I guess that means I don&apos;t have
                  to practice...
                  <br />
                  <br />
                  There are a lot of things and technologies to learn in frontend development and I
                  am motivated to learn as much as possible. I enjoy learning something new and
                  getting feedback to make myself better and improve.
                  <br />
                  <br />
                  In this website I will be writing some blogs and showcase my projects. I believe
                  that writing what I have learned is the best way to remember things, and I can
                  share my knowledge along the way. So do contact me and I will be very happy to
                  help!
                </p>
              </div>
            </article>
          </div>
          <div className="flex flex-col place-content-center">
            <h2 className="text-23xl">
              <Accent>Fav Tech Stack</Accent>
            </h2>
            <div className="-ml-2">
              <TechMdx techs={['react', 'nextjs', 'tailwindcss', 'shadcnui', 'reactquery']} />
            </div>
          </div>
        </>
      </section>
    </RootLayout>
  );
}
