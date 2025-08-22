import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface IPageLinkProps {
  children: string

  onClick?: () => void
  variant?: 'footer' | 'header'
  Icon?: ComponentType<IIconProps>
  className?: string
  isSelected?: boolean
  isChevronEnabled?: boolean
}

export type { IPageLinkProps }
