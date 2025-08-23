import { useGetCurrentAccountWhoamiData } from '@entities/account/api/getCurrentAccountWhoamiData'

const useSession = () => {
  const {
    data: user = null,
    isLoading,
    isError,
  } = useGetCurrentAccountWhoamiData({ refetchInterval: 28 * 60 * 1000 })

  return { user, isLoading, isError }
}

export { useSession }
