import { IUserModel } from '@entities/account/types/IUserModel'

interface IGetProfileMetaResponse
  extends Pick<IUserModel, 'nickname' | 'avatar' | 'slug' | '_id'> {}

export type { IGetProfileMetaResponse }
