import { IUserModel } from '@entities/account/types/IUserModel'

interface INotificationsTabProps {
  data: Pick<IUserModel, 'email' | 'protectionStatus'>
}

export type { INotificationsTabProps }
