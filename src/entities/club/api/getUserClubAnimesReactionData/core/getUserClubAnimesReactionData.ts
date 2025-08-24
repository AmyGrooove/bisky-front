import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserClubAnimesReactionDataResponse } from '../types/IGetUserClubAnimesReactionDataResponse'

const getUserClubAnimesReactionData = createGetFetcher<
  IGetUserClubAnimesReactionDataResponse[]
>('/club/{ID}/userAnimeReactions')

export { getUserClubAnimesReactionData }
