import { useQuery } from '@tanstack/react-query'
import { getProfileHistory } from './getProfileHistory'

const useGetProfileHistory = (username: string, page = 1, count = 40) => {
  return useQuery({
    queryKey: ['profile', username, 'history'],
    queryFn: ({ signal }) =>
      getProfileHistory(username, page, count, false, signal),
  })
}

export { useGetProfileHistory }
