import { useQuery } from '@tanstack/react-query'
import { getProfile } from './getProfile'

const useGetProfile = (username: string) => {
  return useQuery({
    queryKey: ['profile', username],
    queryFn: ({ signal }) => getProfile(username, false, signal),
  })
}

export { useGetProfile }
