import { IBadgeProps } from "../types/IBadgeProps"

const useBadge = (props: IBadgeProps) => {
  const {
    children,
    renderLeftIcon,
    renderRightIcon,
    className,
    isScoreStatus = false,
    variant = "small",
    isDefaultTextColor = true,
    ...otherProps
  } = props

  return {
    children,
    renderLeftIcon,
    renderRightIcon,
    className,
    isScoreStatus,
    variant,
    isDefaultTextColor,
    otherProps,
  }
}

export { useBadge }
