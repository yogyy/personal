import { createEnv } from '@t3-oss/env-core'
import * as z from 'zod'

export const serverEnv = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    SPOTIFY_REFRESH_TOKEN: z.string(),
    SPOTIFY_REFRESH_TOKEN_LAST_PLAYED: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})

export const clientEnv = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_POSTHOG_KEY: z.string(),
    VITE_POSTHOG_HOST: z.url(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
})
