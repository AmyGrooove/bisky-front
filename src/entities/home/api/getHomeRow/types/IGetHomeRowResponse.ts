import { IUserModel } from '@entities/account/types/IUserModel'
import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { ICollectionModel } from '@entities/collection/types/ICollectionModel'
import { IFactModel } from '@entities/fact/types/IFactModel'
import { IPaginationMeta } from '@shared/types'

type TTipTypes = 'AniPick' | 'AniBattle' | 'AniJudge' | 'AnimePass'

interface IHomeRowAnimeItem
  extends Pick<IAnimeModel, '_id' | 'slug' | 'name' | 'poster' | 'status'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IHomeRowCollection
  extends Pick<ICollectionModel, '_id' | 'slug' | 'name'> {}

interface IHomeRowFactAuthor
  extends Pick<IUserModel, '_id' | 'slug' | 'avatar' | 'nickname'> {}

interface ICollectionData {
  collectionData: IHomeRowCollection
  animesData: IHomeRowAnimeItem[]
}

interface IHomeRowFact extends Pick<IFactModel, 'source' | 'text'> {
  author: IHomeRowFactAuthor | null
}

interface IGetHomeRowResult {
  type: 'fact' | 'official' | 'genre' | 'tip'
  factData?: IHomeRowFact | null
  collectionData?: ICollectionData | null
  homeTipData?: TTipTypes | null
}

interface IGetHomeRowResponse extends IPaginationMeta {
  result: IGetHomeRowResult
}

export type { IGetHomeRowResponse }
