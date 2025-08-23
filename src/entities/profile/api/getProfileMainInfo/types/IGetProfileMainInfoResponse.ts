import { ISessionModel } from '@entities/account/types/ISessionModel'
import { IUserModel } from '@entities/account/types/IUserModel'

interface IGetProfileMainInfoResponse
  extends Pick<IUserModel, 'nickname' | 'avatar' | 'slug' | 'role' | '_id'>,
    Pick<ISessionModel, 'loggedAt'> {}

export type { IGetProfileMainInfoResponse }
