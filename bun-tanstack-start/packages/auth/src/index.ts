import { db } from '@bun-tanstack-start/db'
import * as schema from '@bun-tanstack-start/db/schema/auth'
import { env } from '@bun-tanstack-start/env/server'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { tanstackStartCookies } from 'better-auth/tanstack-start'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
    schema: schema,
  }),
  databaseHooks: {
    user: {
      create: {
        before: async (user) => ({
          data: {
            ...user,
            role: env.BETTER_AUTH_ADMIN_EMAILS.includes(user.email)
              ? 'admin'
              : 'user',
          },
        }),
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [tanstackStartCookies()],
  trustedOrigins: env.CORS_ORIGINS,
  user: {
    additionalFields: {
      role: {
        defaultValue: 'user',
        type: 'string',
      },
    },
  },
})
