import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserCurrentAnimeReactionsResponse } from '../types/IGetUserCurrentAnimeReactionsResponse'

const getUserCurrentAnimeReactions =
  createGetFetcher<IGetUserCurrentAnimeReactionsResponse>(
    '/anime/{ID}/userAnimeReactions',
  )

export { getUserCurrentAnimeReactions }
