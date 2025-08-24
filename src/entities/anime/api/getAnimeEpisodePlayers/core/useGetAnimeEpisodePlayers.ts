import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeEpisodePlayersResponse } from '../types/IGetAnimeEpisodePlayersResponse'

import { getAnimeEpisodePlayers } from './getAnimeEpisodePlayers'

const useGetAnimeEpisodePlayers = (
  animeEpisodeID: string,
  options: TUseQueryOptions<typeof getAnimeEpisodePlayers> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', 'episode', animeEpisodeID],
    queryFn: ({ signal }) =>
      getAnimeEpisodePlayers({
        params: { ID: animeEpisodeID },
        optionsGet: { signal },
      }),
  })
}

export { useGetAnimeEpisodePlayers }
