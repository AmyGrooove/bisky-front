import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserFavoriteAnimesResponse } from '../types/IGetUserFavoriteAnimesResponse'

const getUserFavoriteAnimes = createGetFetcher<IGetUserFavoriteAnimesResponse>(
  '/profile/{ID}/favoriteAnimes',
)

export { getUserFavoriteAnimes }
