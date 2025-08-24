import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserCollectionAnimesReactionDataResponse } from '../types/IGetUserCollectionAnimesReactionDataResponse'

const getUserCollectionAnimesReactionData = createGetFetcher<
  IGetUserCollectionAnimesReactionDataResponse[]
>('/collection/{ID}/userAnimeReactions')

export { getUserCollectionAnimesReactionData }
