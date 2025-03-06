import { useGetProfile } from '@entities/profile/api/getProfile'
import { useParams } from 'next/navigation'

const useUserBlock = () => {
  const { username } = useParams()

  const { data, isLoading } = useGetProfile(String(username))

  return { data, isLoading }
}

export { useUserBlock }
