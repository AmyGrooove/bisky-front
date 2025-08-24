import { IPaginationQuery, TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getAnimeEpisodes } from './getAnimeEpisodes'

const useGetAnimeEpisodes = (
  animeID: string,
  additionalQuery: IPaginationQuery = {},
  options: TUseQueryOptions<typeof getAnimeEpisodes> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', animeID, 'episodes'],
    queryFn: ({ signal }) =>
      getAnimeEpisodes({
        params: { ID: animeID },
        query: { ...additionalQuery },
        optionsGet: { signal },
      }),
  })
}

export { useGetAnimeEpisodes }
