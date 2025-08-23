import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { IPaginationMeta } from '@shared/types'

interface IUserAnimeListItemResponse
  extends Pick<IAnimeModel, '_id' | 'name' | 'poster' | 'slug'>,
    Pick<IUserAnimeReactionModel, 'score'> {
  userScore: number | null
}

interface IGetUserAnimeListResponse extends IPaginationMeta {
  results: IUserAnimeListItemResponse[]
}

export type { IGetUserAnimeListResponse }
