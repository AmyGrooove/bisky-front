import { useGetCurrentAccountWhoamiData } from '@entities/account/api/getCurrentAccountWhoamiData'

import { REFETCH_INTERVAL_MS } from '../static/REFETCH_INTERVAL_MS'

const useSession = () => {
  const {
    data: user = null,
    isLoading,
    isError,
    refetch,
  } = useGetCurrentAccountWhoamiData({
    refetchInterval: REFETCH_INTERVAL_MS,
    staleTime: REFETCH_INTERVAL_MS,
    refetchOnWindowFocus: false,
  })

  const isAuthenticated = Boolean(user)

  return { user, isLoading, isError, isAuthenticated, refetch }
}

export { useSession }
