import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { Toaster } from '@workspace/ui/components/sonner'
import type { ReactNode } from 'react'
import { queryClient } from './query-client.tsx'

interface ShellProviderProps {
  children: ReactNode
}

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
})

export function ShellProviders({ children }: ShellProviderProps) {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      {children}
      <Toaster closeButton richColors />
    </PersistQueryClientProvider>
  )
}
