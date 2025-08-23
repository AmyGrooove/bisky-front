import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

type THomeRowType = 'official' | 'genre' | 'fact' | 'tip'

interface IHomeRowAnime
  extends Pick<IAnimeModel, '_id' | 'slug' | 'name' | 'poster' | 'status'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IGetHomeRowResponse {
  type: THomeRowType
  result: string | IHomeRowAnime[]
}

export type { IGetHomeRowResponse }
