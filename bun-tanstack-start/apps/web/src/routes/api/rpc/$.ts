import { createContext } from '@bun-tanstack-start/api/context'
import { appRouter } from '@bun-tanstack-start/api/routers/index'
import { OpenAPIHandler } from '@orpc/openapi/fetch'
import { OpenAPIReferencePlugin } from '@orpc/openapi/plugins'
import { onError } from '@orpc/server'
import { RPCHandler } from '@orpc/server/fetch'
import { ZodToJsonSchemaConverter } from '@orpc/zod/zod4'
import { createFileRoute } from '@tanstack/react-router'

const rpcHandler = new RPCHandler(appRouter, {
  interceptors: [
    onError((error) => {
      console.error(error)
    }),
  ],
})

const apiHandler = new OpenAPIHandler(appRouter, {
  interceptors: [
    onError((error) => {
      console.error(error)
    }),
  ],
  plugins: [
    new OpenAPIReferencePlugin({
      schemaConverters: [new ZodToJsonSchemaConverter()],
    }),
  ],
})

async function handle({ request }: { request: Request }) {
  const rpcResult = await rpcHandler.handle(request, {
    context: await createContext({ req: request }),
    prefix: '/api/rpc',
  })
  if (rpcResult.response) return rpcResult.response

  const apiResult = await apiHandler.handle(request, {
    context: await createContext({ req: request }),
    prefix: '/api/rpc/api-reference',
  })
  if (apiResult.response) return apiResult.response

  return new Response('Not found', { status: 404 })
}

export const Route = createFileRoute('/api/rpc/$')({
  server: {
    handlers: {
      DELETE: handle,
      GET: handle,
      HEAD: handle,
      PATCH: handle,
      POST: handle,
      PUT: handle,
    },
  },
})
