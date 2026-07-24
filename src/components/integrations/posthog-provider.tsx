import { PostHogProvider as BasePostHogProvider } from '@posthog/react'
import posthog from 'posthog-js'
import type { ReactNode } from 'react'
import { clientEnv } from '#/env'

const isProd = process.env.NODE_ENV === 'production'

if (typeof window !== 'undefined' && isProd) {
  posthog.init(clientEnv.VITE_POSTHOG_KEY, {
    api_host: isProd ? clientEnv.VITE_POSTHOG_HOST : 'http://localhost:3000',
  })
}

interface PostHogProviderProps {
  children: ReactNode
}

export default function PostHogProvider({ children }: PostHogProviderProps) {
  return <BasePostHogProvider client={posthog}>{children}</BasePostHogProvider>
}
