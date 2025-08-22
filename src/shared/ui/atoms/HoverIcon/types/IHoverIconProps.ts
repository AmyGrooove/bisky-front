import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface IHoverIconProps {
  Children: ComponentType<IIconProps>

  variant?: 'footerLink' | 'barIcon'
  className?: string
}

export type { IHoverIconProps }
