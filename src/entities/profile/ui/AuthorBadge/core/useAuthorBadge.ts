import { IAuthorBadgeProps } from '../types/IAuthorBadgeProps'

const useAuthorBadge = (props: IAuthorBadgeProps) => {
  const { userData, variant = 'big', className, isCurrentUser = false } = props

  return { variant, userData, className, isCurrentUser }
}

export { useAuthorBadge }
