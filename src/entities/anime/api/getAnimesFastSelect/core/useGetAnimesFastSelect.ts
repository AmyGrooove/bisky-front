import { useQuery } from '@tanstack/react-query'

import { getAnimesFastSelect } from './getAnimesFastSelect'

const useGetAnimesFastSelect = () => {
  return useQuery({
    queryKey: ['anime', 'fastSelect'],
    queryFn: ({ signal }) => getAnimesFastSelect(false, signal),
  })
}

export { useGetAnimesFastSelect }
