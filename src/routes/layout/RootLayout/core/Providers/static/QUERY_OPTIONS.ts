import { errorToast } from '@shared/utils/toast'
import { QueryCache, QueryClientConfig } from '@tanstack/react-query'

import { QUERY_SKIP_LIST } from './QUERY_SKIP_LIST'

const QUERY_OPTIONS: QueryClientConfig = {
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

      const isSkipped = queryKey.some((key) => QUERY_SKIP_LIST.includes(key))
      const isUnauthorized = error.message === 'Unauthorized'

      if (isSkipped || isUnauthorized) return

      console.error(error)
      errorToast({ message: `Ошибка: ${error.message}` })
    },
  }),
}

export { QUERY_OPTIONS }
