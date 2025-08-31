import { MouseEventHandler, ReactNode } from 'react'

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
  Icon: ReactNode
}

type TGlassButtonProps =
  | IGlassButtonPropsWithChildren
  | IGlassButtonPropsWithIcon

export type { TGlassButtonProps }
