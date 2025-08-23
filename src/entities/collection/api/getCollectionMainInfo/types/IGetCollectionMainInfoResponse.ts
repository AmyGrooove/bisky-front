import { IUserModel } from '@entities/account/types/IUserModel'
import { ICollectionModel } from '@entities/collection/types/ICollectionModel'
import { IUserCollectionReactionModel } from '@entities/collection/types/IUserCollectionReactionModel'

interface ICollectionAuthorResponse
  extends Pick<IUserModel, '_id' | 'slug' | 'avatar' | 'nickname'> {}

interface IGetCollectionMainInfoResponse
  extends Pick<
      ICollectionModel,
      | 'name'
      | 'poster'
      | 'description'
      | 'isPublic'
      | 'type'
      | 'views'
      | 'updatedAt'
      | 'createdAt'
      | 'slug'
      | 'tags'
    >,
    Pick<IUserCollectionReactionModel, 'score'> {
  author: ICollectionAuthorResponse | null
  scoreCount: number | null
  favoriteCount: number | null
}

export type { IGetCollectionMainInfoResponse }
