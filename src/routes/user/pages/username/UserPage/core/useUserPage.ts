import { useSession } from '@entities/auth/hooks/useSession'
import { useGetProfile } from '@entities/profile/api/getProfile'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'

const useUserPage = () => {
  const { username } = useParams()
  const { replace } = useRouter()

  const { user } = useSession()
  const { data, isLoading } = useGetProfile(String(username))

  const isCurrentUser = useMemo(() => username === user?.username, [])

  useEffect(() => {
    if (isCurrentUser && username !== user?.username)
      replace(`/user/${user?.username}`)
  }, [username, user, isCurrentUser])

  return { data, isLoading }
}

export { useUserPage }
