import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserFavoriteAnimeReactionsResponse } from '../types/IGetUserFavoriteAnimeReactionsResponse'

const getUserFavoriteAnimeReactions = createGetFetcher<
  IGetUserFavoriteAnimeReactionsResponse[]
>('/profile/{ID}/userFavoriteAnimeReactions')

export { getUserFavoriteAnimeReactions }
