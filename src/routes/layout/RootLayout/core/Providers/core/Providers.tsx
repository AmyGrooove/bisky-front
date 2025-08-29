'use client'

import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query'
import { ModalWrapper } from '@widgets/ModalWrapper'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'
import { ENV } from '@shared/static'
import dynamic from 'next/dynamic'

import { IProvidersProps } from '../types/IProvidersProps'

import { useProviders } from './useProviders'

const TanstackDevtools = dynamic(
  () => import('@tanstack/react-devtools').then((mod) => mod.TanStackDevtools),
  { ssr: false },
)

const ReactQueryDevtoolsPanel = dynamic(
  () =>
    import('@tanstack/react-query-devtools').then(
      (mod) => mod.ReactQueryDevtoolsPanel,
    ),
  { ssr: false },
)

const PacerDevtoolsPanel = dynamic(
  () =>
    import('@tanstack/react-pacer-devtools').then(
      (mod) => mod.PacerDevtoolsPanel,
    ),
  { ssr: false },
)

const Providers = (props: IProvidersProps) => {
  const { queryClient, children, dehydratedState } = useProviders(props)

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <Toaster />
        <ModalWrapper />
        <NextTopLoader color="var(--bisky-100)" showSpinner={false} />
        {ENV.IS_DEVELOPMENT && (
          <TanstackDevtools
            plugins={[
              { name: 'Query', render: <ReactQueryDevtoolsPanel /> },
              { name: 'Pacer', render: <PacerDevtoolsPanel /> },
            ]}
          />
        )}
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  )
}

export { Providers }
