import { IIconProps } from '@shared/types'
import { ComponentType, ReactNode } from 'react'

interface IBigButtonProps {
  onClick: () => void
  children: ReactNode
  Icon: ComponentType<IIconProps>

  isDisabled?: boolean
  variant?: 'small' | 'big'
  iconText?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export type { IBigButtonProps }
