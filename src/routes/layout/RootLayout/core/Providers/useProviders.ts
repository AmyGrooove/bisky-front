import { QueryCache, QueryClient } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
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
            staleTime: 1000 * 60 * 5,
            retry: false,
          },
          mutations: {
            retry: false,
          },
        },
        queryCache: new QueryCache({
          onError: (error, query) => {
            if (
              query.queryKey.some((key) =>
                QUERY_SKIP_LIST.includes(key as string),
              )
            )
              return

            if (error.message === 'Unauthorized') return

            console.error(error)
            errorToast({ message: `Произошла ошибка: ${error.message}` })
          },
        }),
      }),
    [],
  )

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error)
    }
  }, [])

  return { queryClient, children }
}

export { useProviders }
