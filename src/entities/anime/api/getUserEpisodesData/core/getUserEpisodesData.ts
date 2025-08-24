import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserEpisodesDataResponse } from '../types/IGetUserEpisodesDataResponse'

const getUserEpisodesData = createGetFetcher<IGetUserEpisodesDataResponse[]>(
  '/anime/{ID}/userEpisodes',
)

export { getUserEpisodesData }
