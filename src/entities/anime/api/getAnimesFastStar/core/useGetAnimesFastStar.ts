import { useQuery } from '@tanstack/react-query'

import { getAnimesFastStar } from './getAnimesFastStar'

const useGetAnimesFastStar = () => {
  return useQuery({
    queryKey: ['anime', 'fastStar'],
    queryFn: ({ signal }) => getAnimesFastStar({ signal }),
  })
}

export { useGetAnimesFastStar }
