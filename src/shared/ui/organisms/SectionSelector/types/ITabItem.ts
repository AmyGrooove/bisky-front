import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface ITabItem<T extends string = string> {
  value: T
  children: string

  className?: string
  isDisabled?: boolean
  Icon?: ComponentType<IIconProps>
}

export type { ITabItem }
