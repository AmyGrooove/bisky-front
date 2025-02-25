import { useQuery } from '@tanstack/react-query'
import { getAnimesFastSelect } from './getAnimesFastSelect'

const useGetAnimesFastSelect = () => {
  return useQuery({
    queryKey: ['anime', 'fast'],
    queryFn: ({ signal }) => getAnimesFastSelect(signal),
  })
}

export { useGetAnimesFastSelect }
