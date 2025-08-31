import { ReactNode } from 'react'

interface IHoverIconProps {
  Icon: ReactNode

  onClick?: () => void
  isSelected?: boolean
  variant?: 'footerLink' | 'barIcon'
  className?: string
}

export type { IHoverIconProps }
