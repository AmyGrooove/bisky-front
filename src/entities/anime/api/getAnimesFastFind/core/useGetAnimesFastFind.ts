import { useQuery } from '@tanstack/react-query'
import { getAnimesFastFind } from './getAnimesFastFind'

const useGetAnimesFastFind = () => {
  return useQuery({
    queryKey: ['anime', 'fastFind'],
    queryFn: ({ signal }) => getAnimesFastFind(false, signal),
    gcTime: 0,
  })
}

export { useGetAnimesFastFind }
