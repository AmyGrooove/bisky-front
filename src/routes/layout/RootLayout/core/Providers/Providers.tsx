'use client'

import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query'
import { ModalWrapper } from '@widgets/ModalWrapper'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { IRootLayoutProps } from '../../types/IRootLayoutProps'

import { useProviders } from './useProviders'

const Providers = (props: IRootLayoutProps) => {
  const { queryClient, children, dehydratedState } = useProviders(props)

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <Toaster />
        <ModalWrapper />
        <NextTopLoader color="var(--bisky-100)" showSpinner={false} />
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  )
}

export { Providers }
