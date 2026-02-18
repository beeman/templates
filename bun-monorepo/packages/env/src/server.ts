import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  emptyStringAsUndefined: true,
  runtimeEnv: process.env,
  server: {
    CORS_ORIGINS: z
      .string()
      .default('')
      .transform((val) =>
        val
          .split(',')
          .map((url) => url.trim())
          .filter(Boolean),
      )
      .pipe(z.array(z.string().url())),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(3000),
  },
})
