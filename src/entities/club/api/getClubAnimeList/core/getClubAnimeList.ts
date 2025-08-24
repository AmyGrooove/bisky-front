import { createGetFetcher } from '@shared/utils/functions'

import { IGetClubAnimeListResponse } from '../types/IGetClubAnimeListResponse'

const getClubAnimeList = createGetFetcher<IGetClubAnimeListResponse>(
  '/club/{ID}/animeList',
)

export { getClubAnimeList }
