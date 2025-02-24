import { TBadgeProps } from '../types/TBadgeProps'

const useBadge = (props: TBadgeProps) => {
  const {
    children = null,
    Icon = null,
    className = null,
    iconText = null,
    variant = 'small',
    isCustomColor = false,
    isCustomTextColor = false,
  } = props

  return {
    children,
    Icon,
    className,
    iconText,
    variant,
    isCustomColor,
    isCustomTextColor,
  }
}

export { useBadge }
