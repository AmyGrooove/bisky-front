import { createGetFetcher } from '@shared/utils/functions'

import { IGetClubAnimeListResponse } from '../types/IGetClubAnimeListResponse'

const getClubAnimeList = createGetFetcher<IGetClubAnimeListResponse>(
  '/dubClub/{ID}/animeList',
)

export { getClubAnimeList }
