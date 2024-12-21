import { HTMLAttributes, ReactNode } from "react"

import { IIconProps } from "@shared/icons"

interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "big" | "medium" | "small"
  children?: string
  renderRightIcon?: (props: IIconProps) => ReactNode
  renderLeftIcon?: (props: IIconProps) => ReactNode
  isScoreStatus?: boolean
  isDefaultTextColor?: boolean
}

export type { IBadgeProps }
