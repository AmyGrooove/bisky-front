import { IUserModel } from '@entities/account/types/IUserModel'

interface IFactCardProps {
  text: string

  variant?: 'big' | 'small'
  source?: string | null
  author?: Pick<IUserModel, 'nickname' | 'avatar' | 'slug'> | null
  className?: string
}

export type { IFactCardProps }
