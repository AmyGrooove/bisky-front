import { HTMLAttributes, ReactElement } from "react"

interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "big" | "medium" | "small"
  children?: string
  rightIcon?: ReactElement<HTMLElement>
  leftIcon?: ReactElement<HTMLElement>
  isScoreStatus?: boolean
  isDefaultTextColor?: boolean
}

export type { IBadgeProps }
