import { useQuery } from '@tanstack/react-query'
import { getAnimesFastFind } from './getAnimesFastFind'

const useGetAnimesFastFind = () => {
  return useQuery({
    queryKey: [],
    queryFn: ({ signal }) => getAnimesFastFind(signal),
  })
}

export { useGetAnimesFastFind }
