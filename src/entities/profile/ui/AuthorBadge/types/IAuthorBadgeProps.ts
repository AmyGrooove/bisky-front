import { IUserModel } from '@entities/account/types/IUserModel'

interface IAuthorBadgeProps {
  userData: Pick<IUserModel, 'avatar' | 'nickname' | 'slug'> | null

  isCurrentUser?: boolean
  variant?: 'small' | 'medium' | 'big'
  className?: string
  maxChars?: number
}

export type { IAuthorBadgeProps }
