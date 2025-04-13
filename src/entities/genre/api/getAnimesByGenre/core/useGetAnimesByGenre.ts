import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimesByGenre } from './getAnimesByGenre'

const useGetAnimesByGenre = (
  genreID: string,
  page = 1,
  count = 40,
  options: TUseQueryOptions<typeof getAnimesByGenre> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['genre', genreID, 'animes'],
    queryFn: ({ signal }) => getAnimesByGenre(genreID, page, count, { signal }),
  })
}

export { useGetAnimesByGenre }
