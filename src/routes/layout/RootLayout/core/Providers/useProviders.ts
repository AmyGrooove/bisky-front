import { dehydrate, QueryCache, QueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { errorToast } from '@shared/utils/toast'

import { IRootLayoutProps } from '../../types/IRootLayoutProps'
import { QUERY_SKIP_LIST } from '../../static/QUERY_SKIP_LIST'

const useProviders = (props: IRootLayoutProps) => {
  const { children } = props

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
          onError: async (error, query) => {
            const queryKey = query.queryKey.map(String)

            const isSkipped = queryKey.some((key) =>
              QUERY_SKIP_LIST.includes(key),
            )
            const isWhoAmI = queryKey.includes('whoami')
            const isUnauthorized = error.message === 'Unauthorized'

            if (isSkipped || isUnauthorized || isWhoAmI) return

            console.error(error)
            errorToast({ message: `Произошла ошибка: ${error.message}` })
          },
        }),
      }),
    [],
  )

  const dehydratedState = dehydrate(queryClient)

  return { queryClient, children, dehydratedState }
}

export { useProviders }
