import { useQuery } from '@tanstack/react-query'
import { getAnimesFastStar } from './getAnimesFastStar'

const useGetAnimesFastStar = () => {
  return useQuery({
    queryKey: ['anime'],
    queryFn: ({ signal }) => getAnimesFastStar(false, signal),
  })
}

export { useGetAnimesFastStar }
