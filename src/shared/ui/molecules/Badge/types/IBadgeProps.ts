import { HTMLAttributes, ReactElement } from "react"

interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: string
  iconRight?: ReactElement
  iconLeft?: ReactElement
  isScoreStatus?: boolean
}

export type { IBadgeProps }
