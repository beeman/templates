import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { rootRoutes } from './routes/root.ts'

const app = new Hono()

const allowedOrigins =
  process.env['CORS_ORIGINS']
    ?.split(',')
    .map((o) => o.trim())
    .filter(Boolean) ?? []

app.use('*', cors({ origin: allowedOrigins }))

app.route('/', rootRoutes)

export default {
  fetch: app.fetch,
  port: Number(process.env['PORT'] ?? 3000),
}
