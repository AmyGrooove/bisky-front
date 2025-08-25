import { IUserModel } from '@entities/account/types/IUserModel'
import { IFactModel } from '@entities/fact/types/IFactModel'

interface ICollectionAuthorResponse
  extends Pick<IUserModel, '_id' | 'slug' | 'avatar' | 'nickname'> {}

interface IGetRandomFactResponse extends Pick<IFactModel, 'source' | 'text'> {
  author: ICollectionAuthorResponse | null
}

export type { IGetRandomFactResponse }
