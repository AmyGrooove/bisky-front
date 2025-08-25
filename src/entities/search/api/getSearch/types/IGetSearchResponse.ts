import { IUserModel } from '@entities/account/types/IUserModel'
import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IDubClubModel } from '@entities/dubClub/types/IDubClubModel'
import { ICollectionModel } from '@entities/collection/types/ICollectionModel'

interface ISearchAnime
  extends Pick<IAnimeModel, '_id' | 'slug' | 'name' | 'poster'> {}

interface ISearchCollection
  extends Pick<ICollectionModel, '_id' | 'slug' | 'name' | 'poster'> {}

interface ISearchClub
  extends Pick<IDubClubModel, '_id' | 'slug' | 'name' | 'logo'> {}

interface ISearchUser
  extends Pick<IUserModel, '_id' | 'slug' | 'nickname' | 'avatar'> {}

interface IGetSearchResponse {
  anime?: ISearchAnime[]
  collection?: ISearchCollection[]
  dubClub?: ISearchClub[]
  user?: ISearchUser[]
}

export type { IGetSearchResponse }
