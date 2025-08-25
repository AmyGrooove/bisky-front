import { IUserModel } from '@entities/account/types/IUserModel'
import { ICollectionModel } from '@entities/collection/types/ICollectionModel'
import { IUserCollectionReactionModel } from '@entities/collection/types/IUserCollectionReactionModel'

interface ICollectionData
  extends Pick<ICollectionModel, 'slug' | 'name' | 'poster'>,
    Pick<IUserCollectionReactionModel, 'score'> {
  author: Pick<IUserModel, 'nickname' | 'avatar' | 'slug' | '_id'> | null
}

interface ICollectionCardProps {
  collectionData: ICollectionData
  itemsCount: number

  className?: string
  variant?: 'big' | 'small'
  badges?: {
    score?: number | null
  }
}

export type { ICollectionCardProps }
