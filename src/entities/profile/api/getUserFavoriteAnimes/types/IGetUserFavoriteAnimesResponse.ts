import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { IPaginationMeta } from '@shared/types'

interface IFavoriteAnimeResponse
  extends Pick<IAnimeModel, '_id' | 'name' | 'poster' | 'slug'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IGetUserFavoriteAnimesResponse extends IPaginationMeta {
  results: IFavoriteAnimeResponse[]
}

export type { IGetUserFavoriteAnimesResponse }
