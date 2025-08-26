import { IIconProps } from '@shared/types'
import { ComponentType, MouseEventHandler, ReactNode } from 'react'

interface IBigButtonProps {
  children: ReactNode
  Icon: ComponentType<IIconProps>

  onClick?: MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
  variant?: 'small' | 'big'
  iconText?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export type { IBigButtonProps }
