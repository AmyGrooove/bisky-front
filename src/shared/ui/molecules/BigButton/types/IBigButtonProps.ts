import { IIconProps } from '@shared/types'
import { MouseEventHandler, ReactNode } from 'react'

interface IBigButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: string
  Icon: (props: IIconProps) => ReactNode

  isDisabled?: boolean
  variant?: 'small' | 'big'
  iconText?: string
  className?: string
  isCustomColor?: boolean
}

export type { IBigButtonProps }
