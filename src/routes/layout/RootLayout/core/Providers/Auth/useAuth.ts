import { useGetWhoami } from '@entities/auth/api/getWhoami'
import { setSessionError, setUserData } from '@entities/auth/hooks/useSession'
import { isNil } from '@shared/utils/functions'
import { useEffect } from 'react'

const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
    dataUpdatedAt,
  } = useGetWhoami({
    refetchInterval: 28 * 60 * 1000,
  })

  useEffect(() => {
    console.log(user)

    if (isLoading) return

    if (isError) {
      setSessionError(isError)
    } else if (!isNil(user)) {
      setUserData(user)
    }
  }, [dataUpdatedAt, isError, user, isLoading])
}

export { useAuth }
