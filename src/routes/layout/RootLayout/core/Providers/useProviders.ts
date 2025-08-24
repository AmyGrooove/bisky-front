import { QueryCache, QueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { errorToast } from '@shared/utils/toast'

import { IProvidersProps } from '../../types/IProvidersProps'

const useProviders = (props: IProvidersProps) => {
  const { children, dehydratedState } = props

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 20,
            gcTime: 1000 * 60 * 30,
            retry: false,
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: false,
          },
        },
        queryCache: new QueryCache({
          onError: async (error) => {
            console.error(error)
            errorToast({ message: `Произошла ошибка: ${error.message}` })
          },
        }),
      }),
    [],
  )

  return { queryClient, children, dehydratedState }
}

export { useProviders }
