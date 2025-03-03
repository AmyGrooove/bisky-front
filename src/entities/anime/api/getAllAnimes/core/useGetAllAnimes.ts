import { useQuery } from '@tanstack/react-query'
import { getAllAnimes } from './getAllAnimes'

const useGetAllAnimes = (excludedAnimeIDs: string[] = []) => {
  return useQuery({
    queryKey: ['anime', 'allAnimes'],
    queryFn: ({ signal }) => getAllAnimes(excludedAnimeIDs, false, signal),
  })
}

export { useGetAllAnimes }
