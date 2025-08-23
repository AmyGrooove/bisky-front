import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface IGetUserClubAnimesReactionDataResponse
  extends Pick<IAnimeModel, '_id'>,
    Pick<IUserAnimeReactionModel, 'score' | 'status'> {}

export type { IGetUserClubAnimesReactionDataResponse }
