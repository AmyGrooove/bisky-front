import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface IGetUserCollectionAnimesReactionDataResponse
  extends Pick<IAnimeModel, '_id'>,
    Pick<IUserAnimeReactionModel, 'score' | 'status'> {}

export type { IGetUserCollectionAnimesReactionDataResponse }
