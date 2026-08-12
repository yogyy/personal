import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { domAnimation, LazyMotion } from 'motion/react'
import { Footer } from '#/components/footer.tsx'
import PostHogProvider from '#/components/integrations/posthog-provider.tsx'
import RulerLines from '#/components/ruler-lines.tsx'
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
        title: 'yogyy/index · Web Developer',
      },
      {
        name: 'description',
        content:
          "I'm a full-stack web developer specializing in React and Typescript.",
      },
      {
        name: 'google-site-verification',
        content: 'JVpqF5Cgob5E2frmdM4QbSaMyZB5oT4Oolt9x_-qclk',
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
                <div className="relative mx-auto min-h-dvh w-full max-w-400">
                  <RulerLines variant="left" />
                  <Navbar />
                  <div className="px-4 md:px-8">
                    <main id="skip-nav" className="min-h-dvh px-[2%]">
                      {children}
                    </main>
                  </div>
                  <Footer />
                  <RulerLines variant="right" />
                </div>
              </TooltipProvider>
            </LazyMotion>
          </ThemeProvider>
        </PostHogProvider>
        <Scripts />
      </body>
    </html>
  )
}
