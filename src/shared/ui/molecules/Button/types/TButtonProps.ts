import { MouseEventHandler, ReactNode } from 'react'

interface IButtonPropsBase {
  onClick?: MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
  variant?: 'small' | 'big'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

interface IButtonPropsWithChildren extends IButtonPropsBase {
  children: string

  Icon?: ReactNode
}

interface IButtonPropsWithIcon extends IButtonPropsBase {
  Icon: ReactNode

  children?: string
}

type TButtonProps = IButtonPropsWithChildren | IButtonPropsWithIcon

export type { TButtonProps }
