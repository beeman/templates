import 'dotenv/config'
import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'
import { parseCsvString } from './parse-csv-string'

export const env = createEnv({
  emptyStringAsUndefined: true,
  runtimeEnv: process.env,
  server: {
    BETTER_AUTH_ADMIN_EMAILS: parseCsvString(z.email()),
    BETTER_AUTH_SECRET: z.string().min(32),
    BETTER_AUTH_URL: z.url(),
    CORS_ORIGINS: parseCsvString(z.url()),
    DATABASE_AUTH_TOKEN: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
})
