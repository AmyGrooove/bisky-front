import { MouseEventHandler, ReactNode } from 'react'

interface IBigButtonProps {
  children: ReactNode
  Icon: ReactNode

  onClick?: MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
  variant?: 'small' | 'big'
  iconText?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export type { IBigButtonProps }
