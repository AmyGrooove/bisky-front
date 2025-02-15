import { MouseEventHandler, ReactElement } from 'react'

interface IButtonPropsBase {
  onClick: MouseEventHandler<HTMLButtonElement>

  isDisabled?: boolean
  variant?: 'small' | 'big'
  className?: string
}

interface IButtonPropsWithChildren extends IButtonPropsBase {
  children: string

  icon?: ReactElement<HTMLElement>
}

interface IButtonPropsWithIcon extends IButtonPropsBase {
  icon: ReactElement<HTMLElement>

  children?: string
}

type TButtonProps = IButtonPropsWithChildren | IButtonPropsWithIcon

export type { TButtonProps }
