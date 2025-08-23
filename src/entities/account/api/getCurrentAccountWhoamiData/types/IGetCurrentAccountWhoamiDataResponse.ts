import { IUserModel } from '@entities/account/types/IUserModel'

interface IGetCurrentAccountWhoamiDataResponse
  extends Pick<IUserModel, 'slug' | '_id' | 'avatar' | 'nickname'> {}

export type { IGetCurrentAccountWhoamiDataResponse }
