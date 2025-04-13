import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimesFastStar } from './getAnimesFastStar'

const useGetAnimesFastStar = (
  options: TUseQueryOptions<typeof getAnimesFastStar> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', 'fastStar'],
    queryFn: ({ signal }) => getAnimesFastStar({ signal }),
  })
}

export { useGetAnimesFastStar }
