import { QueryCache, QueryClient } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { errorToast } from '@shared/utils/toast'
import { refreshToken } from '@entities/auth/api/refreshToken'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'

import { IRootLayoutProps } from '../../types/IRootLayoutProps'
import { QUERY_SKIP_LIST } from '../../static/QUERY_SKIP_LIST'

const useProviders = (props: IRootLayoutProps) => {
  const { children } = props

  const [isRefreshError, setIsRefreshError] = useState(false)

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
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

            if (isSkipped) return

            if (isWhoAmI && !isUnauthorized && isRefreshError) {
              setIsRefreshError(false)
              return
            }

            if (isUnauthorized) {
              if (isRefreshError) return

              try {
                const response = await refreshToken()

                await setAccessToken(response.tokens.accessToken)
                await setRefreshToken(response.tokens.refreshToken)

                query.fetch()
                return
              } catch {
                if (!isRefreshError) setIsRefreshError(true)
                return
              }
            }

            console.error(error)
            errorToast({ message: `Произошла ошибка: ${error.message}` })
          },
        }),
      }),
    [isRefreshError],
  )

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error)
    }
  }, [])

  return { queryClient, children }
}

export { useProviders }
