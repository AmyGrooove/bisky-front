import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserAnimeListResponse } from '../types/IGetUserAnimeListResponse'

const getUserAnimeList = createGetFetcher<IGetUserAnimeListResponse>(
  '/profile/{ID}/animeList',
)

export { getUserAnimeList }
