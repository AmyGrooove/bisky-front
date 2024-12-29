import { HTMLAttributes, ReactNode } from "react"

interface ICollapseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  label: string

  isLabelHighlighted?: boolean
  isDefaultOpened?: boolean
}

export type { ICollapseProps }
