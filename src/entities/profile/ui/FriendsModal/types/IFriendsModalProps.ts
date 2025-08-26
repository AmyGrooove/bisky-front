import { ISessionModel } from '@entities/account/types/ISessionModel'
import { IUserModel } from '@entities/account/types/IUserModel'

interface IFriendsModalProps {
  friendsData: (Pick<IUserModel, 'avatar' | 'nickname' | 'slug'> &
    Pick<ISessionModel, 'loggedAt'>)[]
}

export type { IFriendsModalProps }
