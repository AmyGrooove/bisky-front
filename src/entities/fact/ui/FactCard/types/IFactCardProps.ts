import { IUserModel } from '@entities/account/types/IUserModel'

interface IFactCardProps {
  text: string

  variant?: 'big' | 'small'
  sourceLink?: string
  author?: Pick<IUserModel, 'nickname' | 'avatar' | 'slug'>
  className?: string
}

export type { IFactCardProps }
