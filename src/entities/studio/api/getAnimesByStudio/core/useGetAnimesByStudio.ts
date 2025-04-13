import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimesByStudio } from './getAnimesByStudio'

const useGetAnimesByStudio = (
  studioID: string,
  page = 1,
  count = 40,
  options: TUseQueryOptions<typeof getAnimesByStudio> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['studio', studioID, 'animes'],
    queryFn: ({ signal }) =>
      getAnimesByStudio(studioID, page, count, { signal }),
  })
}

export { useGetAnimesByStudio }
