import { IUserModel } from '@entities/account/types/IUserModel'

interface IGetCurrentAccountFullDataResponse
  extends Pick<
    IUserModel,
    | 'email'
    | 'nickname'
    | 'username'
    | 'avatar'
    | 'protectionStatus'
    | 'temporaryCode'
    | 'linkedAccounts'
  > {}

export type { IGetCurrentAccountFullDataResponse }
