import { TBadgeProps } from '../types/TBadgeProps'

const useBadge = (props: TBadgeProps) => {
  const {
    children = null,
    icon = null,
    className = null,
    iconText = null,
    variant = 'small',
    isCustomColor = false,
    isCustomTextColor = false,
  } = props

  return {
    children,
    icon,
    className,
    iconText,
    variant,
    isCustomColor,
    isCustomTextColor,
  }
}

export { useBadge }
