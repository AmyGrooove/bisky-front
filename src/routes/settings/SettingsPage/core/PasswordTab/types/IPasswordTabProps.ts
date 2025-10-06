import { IUserModel } from '@entities/account/types/IUserModel'

interface IPasswordTabProps {
  data: Pick<IUserModel, 'protectionStatus'>
}

export type { IPasswordTabProps }
