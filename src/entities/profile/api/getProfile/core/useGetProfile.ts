import { useQuery } from '@tanstack/react-query'
import { getProfile } from './getProfile'

const useGetProfile = (username: string) => {
  return useQuery({
    queryKey: ['anime', 'user', username],
    queryFn: ({ signal }) => getProfile(username, false, signal),
  })
}

export { useGetProfile }
