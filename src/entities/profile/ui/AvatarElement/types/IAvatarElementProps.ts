import { IUserModel } from '@entities/account/types/IUserModel'

interface IAvatarElementProps {
  userData: Pick<IUserModel, 'avatar' | 'nickname' | 'slug'> | null

  variant?: 'small' | 'big'
  className?: string
}

export type { IAvatarElementProps }
