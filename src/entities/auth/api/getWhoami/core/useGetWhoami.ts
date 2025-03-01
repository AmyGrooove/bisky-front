import { useQuery } from '@tanstack/react-query'
import { getWhoami } from './getWhoami'

const useGetWhoami = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: ({ signal }) => getWhoami(false, signal),
  })
}

export { useGetWhoami }
