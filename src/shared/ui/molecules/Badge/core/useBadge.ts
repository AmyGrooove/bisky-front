import { TBadgeProps } from '../types/TBadgeProps'

const useBadge = (props: TBadgeProps) => {
  const {
    children = null,
    Icon = null,
    className = null,
    variant = 'small',
  } = props

  return {
    children,
    Icon,
    className,
    variant,
  }
}

export { useBadge }
