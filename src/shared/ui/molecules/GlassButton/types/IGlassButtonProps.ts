import { IIconProps } from '@shared/types'
import { MouseEventHandler, ReactNode } from 'react'

interface IGlassButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: (props: IIconProps) => ReactNode | string

  iconClassName?: string
  isDisabled?: boolean
  variant?: 'small' | 'big'
  className?: string
}

export type { IGlassButtonProps }
