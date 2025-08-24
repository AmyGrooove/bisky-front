import { createGetFetcher } from '@shared/utils/functions'

import { IGetAnimeEpisodesResponse } from '../types/IGetAnimeEpisodesResponse'

const getAnimeEpisodes = createGetFetcher<IGetAnimeEpisodesResponse>(
  '/anime/{ID}/episodes',
)

export { getAnimeEpisodes }
