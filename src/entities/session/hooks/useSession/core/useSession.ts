import { useGetWhoami } from '@entities/auth/api/getWhoami'

const useSession = () => {
  const {
    data: user = null,
    isLoading,
    isError,
  } = useGetWhoami({ refetchInterval: 28 * 60 * 1000 })

  return { user, isLoading, isError }
}

export { useSession }
