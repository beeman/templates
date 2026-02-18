import { Hono } from 'hono'

export const rootRoutes = new Hono()

rootRoutes.get('/', (c) => {
  return c.text('OK')
})
