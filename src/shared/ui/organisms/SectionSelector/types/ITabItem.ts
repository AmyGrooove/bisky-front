import { ReactNode } from 'react'

interface ITabItem<T extends string = string> {
  value: T
  children: string

  className?: string
  isDisabled?: boolean
  Icon?: ReactNode
}

export type { ITabItem }
