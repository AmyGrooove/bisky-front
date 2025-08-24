import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserAnimeReactionsResponse } from '../types/IGetUserAnimeReactionsResponse'

const getUserAnimeReactions = createGetFetcher<
  IGetUserAnimeReactionsResponse[]
>('/profile/{ID}/userAnimeReactions')

export { getUserAnimeReactions }
