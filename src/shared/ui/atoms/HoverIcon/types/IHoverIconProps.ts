import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface IHoverIconProps {
  Icon: ComponentType<IIconProps>

  onClick?: () => void
  isSelected?: boolean
  variant?: 'footerLink' | 'barIcon'
  className?: string
}

export type { IHoverIconProps }
