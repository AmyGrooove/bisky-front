import { IIconProps } from '@shared/types'
import { MouseEventHandler, ReactNode } from 'react'

interface IButtonPropsBase {
  onClick: MouseEventHandler<HTMLButtonElement>

  isDisabled?: boolean
  isCustomColor?: boolean
  variant?: 'small' | 'big'
  className?: string
}

interface IButtonPropsWithChildren extends IButtonPropsBase {
  children: string

  Icon?: (props: IIconProps) => ReactNode
}

interface IButtonPropsWithIcon extends IButtonPropsBase {
  Icon: (props: IIconProps) => ReactNode

  children?: string
}

type TButtonProps = IButtonPropsWithChildren | IButtonPropsWithIcon

export type { TButtonProps }
