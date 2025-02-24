import { IIconProps } from '@shared/types'
import { ReactNode } from 'react'

interface ITabItem {
  children: string

  Icon?: (props: IIconProps) => ReactNode
}

export type { ITabItem }
