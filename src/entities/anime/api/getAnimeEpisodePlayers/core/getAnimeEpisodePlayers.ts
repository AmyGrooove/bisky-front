import { createGetFetcher } from '@shared/utils/functions'

import { IGetAnimeEpisodePlayersResponse } from '../types/IGetAnimeEpisodePlayersResponse'

const getAnimeEpisodePlayers = createGetFetcher<
  IGetAnimeEpisodePlayersResponse[]
>('/anime/episode/{ID}')

export { getAnimeEpisodePlayers }
