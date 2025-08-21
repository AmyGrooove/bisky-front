import { ComponentType } from 'react'
import { IIconProps } from '@shared/types'

interface IHintMenuItem {
  text: string
  onClick: () => void

  IconLeft?: ComponentType<IIconProps>
  IconRight?: ComponentType<IIconProps>
  isSelected?: boolean
}

export type { IHintMenuItem }
