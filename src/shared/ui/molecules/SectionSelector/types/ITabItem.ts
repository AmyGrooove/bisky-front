import { IIconProps } from '@shared/types'
import { ReactNode } from 'react'

interface ITabItem {
  children: string

  className?: string
  isDisabled?: boolean
  Icon?: (props: IIconProps) => ReactNode
}

export type { ITabItem }
