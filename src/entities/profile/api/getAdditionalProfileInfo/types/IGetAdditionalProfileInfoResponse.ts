import { ISessionModel } from '@entities/account/types/ISessionModel'
import { IUserModel } from '@entities/account/types/IUserModel'

interface IProfileFriendResponse
  extends Pick<IUserModel, 'avatar' | '_id' | 'nickname' | 'slug'>,
    Pick<ISessionModel, 'loggedAt'> {}

interface IProfileListCounts {
  added: number
  watching: number
  completed: number
  dropped: number
}

interface IGetAdditionalProfileInfoResponse
  extends Pick<IUserModel, 'createdAt'> {
  listCounts: IProfileListCounts
  friends: IProfileFriendResponse[]
}

export type { IGetAdditionalProfileInfoResponse }
