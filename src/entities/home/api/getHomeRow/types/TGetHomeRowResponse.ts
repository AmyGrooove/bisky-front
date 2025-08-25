import { IUserModel } from '@entities/account/types/IUserModel'
import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { IFactModel } from '@entities/fact/types/IFactModel'

type TTipTypes = 'AniPick' | 'AniBattle' | 'AniJudge' | 'AnimePass'

interface IHomeRowAnime
  extends Pick<IAnimeModel, '_id' | 'slug' | 'name' | 'poster' | 'status'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IHomeRowFactAuthor
  extends Pick<IUserModel, '_id' | 'slug' | 'avatar' | 'nickname'> {}

interface IHomeRowFact extends Pick<IFactModel, 'source' | 'text'> {
  author: IHomeRowFactAuthor | null
}

interface IGetHomeRowCollectionResponse {
  type: 'official' | 'genre'
  result: IHomeRowAnime[]
}

interface IGetHomeRowFactResponse {
  type: 'fact'
  result: IHomeRowFact
}

interface IGetHomeRowTipResponse {
  type: 'tip'
  result: TTipTypes
}

type TGetHomeRowResponse =
  | IGetHomeRowCollectionResponse
  | IGetHomeRowFactResponse
  | IGetHomeRowTipResponse

export type { TGetHomeRowResponse }
