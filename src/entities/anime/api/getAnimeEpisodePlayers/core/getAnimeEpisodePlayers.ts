import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeEpisodePlayersResponse } from '../types/IGetAnimeEpisodePlayersResponse'

const getAnimeEpisodePlayers = createGetFetcher<
  IGetAnimeEpisodePlayersResponse[]
>('/anime/episode/{ID}')

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
        options: { signal },
      }),
  })
}

export { useGetAnimeEpisodePlayers }
