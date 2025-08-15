import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface ITabItem {
  children: string

  className?: string
  isDisabled?: boolean
  Icon?: ComponentType<IIconProps>
}

export type { ITabItem }
