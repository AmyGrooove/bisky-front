import { IUserModel } from '@entities/account/types/IUserModel'
import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IDubClubModel } from '@entities/dubClub/types/IDubClubModel'
import { ICollectionModel } from '@entities/collection/types/ICollectionModel'

interface ISearchAnime
  extends Pick<IAnimeModel, '_id' | 'slug' | 'name' | 'poster'> {}

interface ISearchCollection
  extends Pick<ICollectionModel, '_id' | 'slug' | 'name' | 'poster'> {
  itemsCount: number
  author: Pick<IUserModel, 'nickname' | 'avatar' | 'slug' | '_id'> | null
}

interface ISearchClub
  extends Pick<IDubClubModel, '_id' | 'slug' | 'name' | 'logo'> {
  itemsCount: number
}

interface ISearchUser
  extends Pick<IUserModel, '_id' | 'slug' | 'nickname' | 'avatar'> {}

interface IGetSearchResponse {
  animes?: ISearchAnime[]
  collections?: ISearchCollection[]
  dubClubs?: ISearchClub[]
  users?: ISearchUser[]
}

export type { IGetSearchResponse }
