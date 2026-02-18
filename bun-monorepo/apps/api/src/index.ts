import { env } from '@workspace/env/server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { rootRoutes } from './routes/root.ts'

const app = new Hono()

app.use('*', cors({ origin: env.CORS_ORIGINS }))

app.route('/', rootRoutes)

export default {
  fetch: app.fetch,
  port: env.PORT,
}
