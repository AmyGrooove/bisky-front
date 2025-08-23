import { IPaginationQuery, TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeEpisodesResponse } from '../types/IGetAnimeEpisodesResponse'

const getAnimeEpisodes = createGetFetcher<IGetAnimeEpisodesResponse>(
  '/anime/{ID}/episodes',
)

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
