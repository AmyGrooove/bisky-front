import { useQuery } from '@tanstack/react-query'
import { getAnimesFastFind } from './getAnimesFastFind'

const useGetAnimesFastFind = () => {
  return useQuery({
    queryKey: ['anime', 'fast'],
    queryFn: ({ signal }) => getAnimesFastFind(signal),
  })
}

export { useGetAnimesFastFind }
