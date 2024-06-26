import { HTMLAttributes, ReactElement } from "react"

interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "big" | "medium" | "small"
  children?: string
  rightIcon?: ReactElement
  leftIcon?: ReactElement
  isScoreStatus?: boolean
  isDefaultTextColor?: boolean
}

export type { IBadgeProps }
