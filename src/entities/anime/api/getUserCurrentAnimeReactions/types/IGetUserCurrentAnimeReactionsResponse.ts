import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface ICurrentAnimeReaction
  extends Pick<
    IUserAnimeReactionModel,
    'score' | 'isFavorite' | 'status' | 'reWatchedCount'
  > {}

interface IRelatedAnimeReaction
  extends Pick<IAnimeModel, '_id'>,
    Pick<IUserAnimeReactionModel, 'score' | 'status'> {}

interface IGetUserCurrentAnimeReactionsResponse {
  currentAnime: ICurrentAnimeReaction
  related: IRelatedAnimeReaction[]
}

export type { IGetUserCurrentAnimeReactionsResponse }
