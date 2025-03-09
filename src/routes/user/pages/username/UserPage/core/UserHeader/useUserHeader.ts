import { formatLastOnline } from '@shared/utils/functions'
import { useParams } from 'next/navigation'
import { useSession } from '@entities/auth/hooks/useSession'
import { useGetProfile } from '@entities/profile/api/getProfile'

const useUserHeader = () => {
  const { username } = useParams()

  const { user } = useSession()
  const { data: profileData } = useGetProfile(String(username))
  const { lastOnlineOn = '', avatar = null } = profileData ?? {}

  const convertedLastOnline = formatLastOnline(lastOnlineOn)

  const isCurrentUser = username === user?.username

  return {
    avatar,
    username: String(username),
    convertedLastOnline,
    isCurrentUser,
  }
}

export { useUserHeader }
