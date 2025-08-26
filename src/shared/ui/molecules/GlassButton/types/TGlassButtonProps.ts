import { IIconProps } from '@shared/types'
import { ComponentType, MouseEventHandler } from 'react'

interface IGlassButtonPropsBase {
  onClick: MouseEventHandler<HTMLButtonElement>

  isDisabled?: boolean
  variant?: 'small' | 'big'
  className?: string
}

interface IGlassButtonPropsWithChildren extends IGlassButtonPropsBase {
  children: string
}

interface IGlassButtonPropsWithIcon extends IGlassButtonPropsBase {
  Icon: ComponentType<IIconProps>
}

type TGlassButtonProps =
  | IGlassButtonPropsWithChildren
  | IGlassButtonPropsWithIcon

export type { TGlassButtonProps }
