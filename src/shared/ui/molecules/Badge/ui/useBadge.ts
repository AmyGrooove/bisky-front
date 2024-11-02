import { IBadgeProps } from "../types/IBadgeProps"

const useBadge = (props: IBadgeProps) => {
  const {
    children,
    leftIcon,
    rightIcon,
    className,
    isScoreStatus = false,
    variant = "small",
    isDefaultTextColor = true,
    ...otherProps
  } = props

  return {
    children,
    leftIcon,
    rightIcon,
    className,
    isScoreStatus,
    variant,
    isDefaultTextColor,
    otherProps,
  }
}

export { useBadge }
