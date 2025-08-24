import { IUserModel } from '@entities/account/types/IUserModel'

interface IAuthorBadgeProps {
  userData: Pick<IUserModel, 'avatar' | 'nickname' | 'slug'> | null

  variant?: 'small' | 'medium' | 'big'
  className?: string
}

export type { IAuthorBadgeProps }
