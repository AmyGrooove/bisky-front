import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface IButtonPropsBase {
  onClick?: () => void
  isDisabled?: boolean
  variant?: 'small' | 'big'
  className?: string
  type?: 'button' | 'submit' | 'reset'
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
