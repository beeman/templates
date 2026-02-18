import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

const viteEnv = createEnv({
  client: {
    VITE_API_URL: z.string().url().default('http://localhost:3000'),
    VITE_NAME: z.string().default('Sandbox'),
  },
  clientPrefix: 'VITE_',
  emptyStringAsUndefined: true,
  runtimeEnv: import.meta.env,
})

export const env = {
  API_URL: viteEnv.VITE_API_URL,
  NAME: viteEnv.VITE_NAME,
}
