import { TBadgeProps } from '../types/TBadgeProps'

const useBadge = (props: TBadgeProps) => {
  const {
    children = null,
    icon = null,
    className = null,
    iconText = null,
    variant = 'small',
    isCustomColor = false,
  } = props

  return { children, icon, className, iconText, variant, isCustomColor }
}

export { useBadge }
