import { MouseEventHandler, ReactElement } from 'react'

interface IBigButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: string
  icon: ReactElement<HTMLElement>

  isDisabled?: boolean
  variant?: 'small' | 'big'
  iconText?: string
  className?: string
  isCustomColor?: boolean
}

export type { IBigButtonProps }
