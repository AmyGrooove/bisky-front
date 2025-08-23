import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface IGetAniJudgeListResponse
  extends Pick<IAnimeModel, '_id' | 'name' | 'poster' | 'slug'>,
    Pick<IUserAnimeReactionModel, 'score' | 'status' | 'isFavorite'> {
  scoreCount: number
}

export type { IGetAniJudgeListResponse }
