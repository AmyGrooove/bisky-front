import { MouseEventHandler, ReactElement } from 'react'

interface IGlassButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactElement<HTMLElement> | string

  iconClassName?: string
  isDisabled?: boolean
  variant?: 'small' | 'big'
  className?: string
}

export type { IGlassButtonProps }
