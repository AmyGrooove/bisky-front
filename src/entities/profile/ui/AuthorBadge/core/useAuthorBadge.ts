import { IAuthorBadgeProps } from '../types/IAuthorBadgeProps'

const useAuthorBadge = (props: IAuthorBadgeProps) => {
  const {
    userData,
    maxChars,
    variant = 'big',
    className,
    isCurrentUser = false,
  } = props

  return { variant, userData, className, isCurrentUser, maxChars }
}

export { useAuthorBadge }
