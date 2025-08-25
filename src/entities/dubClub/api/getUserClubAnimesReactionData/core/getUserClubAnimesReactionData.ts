import { createGetFetcher } from '@shared/utils/functions'

import { IGetUserClubAnimesReactionDataResponse } from '../types/IGetUserClubAnimesReactionDataResponse'

const getUserClubAnimesReactionData = createGetFetcher<
  IGetUserClubAnimesReactionDataResponse[]
>('/dubClub/{ID}/userAnimeReactions')

export { getUserClubAnimesReactionData }
