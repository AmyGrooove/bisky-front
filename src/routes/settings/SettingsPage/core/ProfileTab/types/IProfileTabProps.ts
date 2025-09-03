import { IUserModel } from '@entities/account/types/IUserModel'

interface IProfileTabProps {
  data: Pick<IUserModel, 'avatar' | 'nickname'>
}

export type { IProfileTabProps }
