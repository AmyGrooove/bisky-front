import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

type TTipTypes = 'AniPick' | 'AniBattle' | 'AniJudge' | 'AnimePass'

interface IHomeRowAnime
  extends Pick<IAnimeModel, '_id' | 'slug' | 'name' | 'poster' | 'status'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IGetHomeRowCollectionResponse {
  type: 'official' | 'genre'
  result: IHomeRowAnime[]
}

interface IGetHomeRowFactResponse {
  type: 'fact'
  result: string
}

interface IGetHomeRowTipResponse {
  type: 'fact'
  result: TTipTypes
}

type TGetHomeRowResponse =
  | IGetHomeRowCollectionResponse
  | IGetHomeRowFactResponse
  | IGetHomeRowTipResponse

export type { TGetHomeRowResponse }
