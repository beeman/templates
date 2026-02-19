import { useQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'

import { getUser } from '@/functions/get-user'
import { orpc } from '@/utils/orpc'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async () => {
    const session = await getUser()
    return { session }
  },
  component: RouteComponent,
  loader: async ({ context }) => {
    if (!context.session) {
      throw redirect({ to: '/login' })
    }
  },
})

function RouteComponent() {
  const { session } = Route.useRouteContext()

  const privateData = useQuery(orpc.privateData.queryOptions())

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Dashboard</h1>
      <p>Welcome {session?.user.name}</p>
      <p>Role: {session?.user.role}</p>
      <p>API: {privateData.data?.message}</p>
      <pre className="max-w-full overflow-auto rounded-md bg-muted p-4">
        {JSON.stringify(session?.user, null, 2)}
      </pre>
    </div>
  )
}
