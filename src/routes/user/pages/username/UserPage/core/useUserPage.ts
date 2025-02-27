import { useGetProfile } from '@entities/profile/api/getProfile'
import { useParams } from 'next/navigation'

const useUserPage = () => {
  const { username } = useParams()

  const { data, isLoading } = useGetProfile(String(username))

  return { data, isLoading }
}

export { useUserPage }
