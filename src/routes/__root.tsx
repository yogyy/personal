import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { domAnimation, LazyMotion } from 'motion/react'
import { Footer } from '#/components/footer.tsx'
import PostHogProvider from '#/components/integrations/posthog-provider.tsx'
import Navbar from '#/components/section/navbar'
import NotFoundPage from '#/components/section/not-found.tsx'
import { ThemeProvider } from '#/components/theme-provider'
import { TooltipProvider } from '#/components/ui/tooltip'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Yogyy · Full-Stack Web Developer',
      },
      {
        name: 'description',
        content:
          "I'm a full-stack web developer specializing in React and Typescript.",
      },
      {
        name: 'google-site-verification',
        content: 'JZStioxiRjgkd_yUbH_SwvzLPibnkJptjA9QZQi1Gy4',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: `https://yogyy.vercel.app/` },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col antialiased">
        <PostHogProvider>
          <ThemeProvider defaultTheme="system" storageKey="theme">
            <LazyMotion features={domAnimation}>
              <TooltipProvider>
                <Navbar />
                <main id="skip-nav" className="h-dvh">
                  {children}
                </main>
                <Footer />
              </TooltipProvider>
            </LazyMotion>
          </ThemeProvider>
        </PostHogProvider>
        <Scripts />
      </body>
    </html>
  )
}
