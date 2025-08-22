import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface IPageLinkProps {
  children: string

  onClick?: () => void
  variant?: 'footer' | 'header' | 'mobileHeader'
  Icon?: ComponentType<IIconProps>
  className?: string
  isSelected?: boolean
  isChevronEnabled?: boolean
  isAlwaysHovered?: boolean
}

export type { IPageLinkProps }
