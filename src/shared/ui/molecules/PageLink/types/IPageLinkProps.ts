import { ReactNode } from 'react'

interface IPageLinkProps {
  children: string

  onClick?: () => void
  variant?: 'footer' | 'header' | 'mobileHeader'
  Icon?: ReactNode
  className?: string
  isSelected?: boolean
  isChevronEnabled?: boolean
  isAlwaysHovered?: boolean
}

export type { IPageLinkProps }
