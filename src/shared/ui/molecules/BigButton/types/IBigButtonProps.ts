import { IIconProps } from '@shared/types'
import { ComponentType, MouseEventHandler, ReactNode } from 'react'

interface IBigButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  Icon: ComponentType<IIconProps>

  isDisabled?: boolean
  variant?: 'small' | 'big'
  iconText?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export type { IBigButtonProps }
