import { useQuery } from '@tanstack/react-query'
import { getWhoami } from './getWhoami'

const useGetWhoami = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: ({ signal }) => getWhoami(signal),
    refetchInterval: 4 * 60 * 1000,
  })
}

export { useGetWhoami }
