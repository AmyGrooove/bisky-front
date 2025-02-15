import { TBadgeProps } from '../types/TBadgeProps'

const useBadge = (props: TBadgeProps) => {
  const {
    children = null,
    icon = null,
    className = null,
    iconText = null,
    variant = 'small',
  } = props

  return { children, icon, className, iconText, variant }
}

export { useBadge }
