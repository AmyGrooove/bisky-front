import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface IGlassButtonPropsBase {
  onClick: () => void

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
