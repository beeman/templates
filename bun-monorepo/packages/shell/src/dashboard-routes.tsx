import { env } from '@workspace/env/web'
import { useRoutes } from 'react-router'

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-bold text-2xl">{env.NAME}</h1>
      <div className="flex flex-col gap-2 text-sm">
        <div>
          <span className="font-medium">API URL:</span> {env.API_URL}
        </div>
      </div>
    </div>
  )
}

export function DashboardRoutes() {
  return useRoutes([
    // More routes here...
    { element: <DashboardPage />, path: '*' },
  ])
}
