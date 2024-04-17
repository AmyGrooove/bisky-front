import { HTMLAttributes, ReactNode } from "react"

interface ICollapseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  label: string

  isDefaultOpened?: boolean
}

export type { ICollapseProps }
