'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ModalWrapper } from '@widgets/ModalWrapper'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'
import { IRootLayoutProps } from '../../types/IRootLayoutProps'
import { useProviders } from './useProviders'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from './AuthProvider/AuthProvider'

const Providers = (props: IRootLayoutProps) => {
  const { queryClient, children } = useProviders(props)

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ModalWrapper />
      <NextTopLoader color="var(--bisky-100)" showSpinner={false} />
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )
}

export { Providers }
