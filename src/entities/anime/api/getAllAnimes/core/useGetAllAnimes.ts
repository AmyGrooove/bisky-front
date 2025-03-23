import { useQuery } from '@tanstack/react-query'
import { getAllAnimes } from './getAllAnimes'

const useGetAllAnimes = () => {
  return useQuery({
    queryKey: ['anime', 'allAnimes'],
    queryFn: ({ signal }) => getAllAnimes(false, signal),
  })
}

export { useGetAllAnimes }
