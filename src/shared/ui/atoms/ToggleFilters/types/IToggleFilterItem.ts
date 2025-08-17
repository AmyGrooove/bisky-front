import { ReactNode } from 'react'

interface IToggleFilterItem<T extends string = string> {
  children: ReactNode
  value: T

  className?: string
  isDisabled?: boolean
}

export type { IToggleFilterItem }
