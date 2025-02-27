import { QueryCache, QueryClient } from '@tanstack/react-query'
import { IRootLayoutProps } from '../../types/IRootLayoutProps'
import { useMemo } from 'react'
import { errorToast } from '@shared/utils/toast'
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

            console.log(error)
            errorToast({ message: 'Ой! Произошла ошибка' })
          },
        }),
      }),
    [],
  )

  return { queryClient, children }
}

export { useProviders }
