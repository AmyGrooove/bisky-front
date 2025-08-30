import { QueryCache, QueryClient } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { errorToast } from '@shared/utils/toast'
import { usePathname } from 'next/navigation'

import { IProvidersProps } from '../types/IProvidersProps'
import { QUERY_SKIP_LIST } from '../static/QUERY_SKIP_LIST'

const useProviders = (props: IProvidersProps) => {
  const { children, dehydratedState } = props

  const pathname = usePathname()

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
            const isUnauthorized = error.message === 'Unauthorized'

            if (isSkipped || isUnauthorized) return

            console.error(error)
            errorToast({ message: `Ошибка: ${error.message}` })
          },
        }),
      }),
    [],
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return { queryClient, children, dehydratedState }
}

export { useProviders }
