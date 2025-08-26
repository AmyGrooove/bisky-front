import { IIconProps } from '@shared/types'
import { ComponentType, MouseEventHandler } from 'react'

interface IButtonPropsBase {
  onClick?: MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
  variant?: 'small' | 'big'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

interface IButtonPropsWithChildren extends IButtonPropsBase {
  children: string

  Icon?: ComponentType<IIconProps>
}

interface IButtonPropsWithIcon extends IButtonPropsBase {
  Icon: ComponentType<IIconProps>

  children?: string
}

type TButtonProps = IButtonPropsWithChildren | IButtonPropsWithIcon

export type { TButtonProps }
