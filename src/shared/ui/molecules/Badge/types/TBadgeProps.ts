import { IIconProps } from '@shared/types'
import { ComponentType, ReactNode } from 'react'

interface IBadgePropsBase {
  variant?: 'small' | 'medium' | 'big'
  className?: string
}

interface IBadgePropsWithChildren extends IBadgePropsBase {
  children: ReactNode

  Icon?: ComponentType<IIconProps>
}

interface IBadgePropsWithIcon extends IBadgePropsBase {
  Icon: ComponentType<IIconProps>

  children?: ReactNode
}

type TBadgeProps = IBadgePropsWithChildren | IBadgePropsWithIcon

export type { TBadgeProps }
