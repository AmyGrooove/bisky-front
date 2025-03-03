import { useQuery } from '@tanstack/react-query'
import { getWhoami } from './getWhoami'

const useGetWhoami = () => {
  return useQuery({
    queryKey: ['auth', 'whoami'],
    queryFn: ({ signal }) => getWhoami(false, signal),
  })
}

export { useGetWhoami }
