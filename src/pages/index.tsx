import { allProjects } from 'contentlayer/generated';
import { InView } from 'react-intersection-observer';
import { RootLayout } from '@/components/layouts/root-layout';
import { ProjectCard } from '@/components/project-card';
import { HeroSection } from '@/components/section/hero';
import { Reveal } from '@/components/section/reveal';
import { SkillSection } from '@/components/section/skills';
import { TechSection } from '@/components/section/tech';

export default function Home() {
  return (
    <RootLayout>
      <HeroSection />
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className="layout py-20">
            <SkillSection inView={inView} />
          </section>
        )}
      </InView>
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <Reveal ref={ref} inView={inView}>
            <article>
              <div>
                <h1 className="mt-14 text-accent">Tech Stack</h1>
                <p className="mt-2">
                  Here are the technologies I use regularly to build a projects:
                </p>
                <TechSection className="mt-6 text-text/75" />
              </div>
            </article>
          </Reveal>
        )}
      </InView>
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <Reveal ref={ref} inView={inView}>
            <article>
              <h1 className="text-accent">Features Project</h1>
              <p className="mt-2">Showcasing my expertise in frontend and fullstack development.</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {allProjects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>
            </article>
          </Reveal>
        )}
      </InView>
    </RootLayout>
  );
}
