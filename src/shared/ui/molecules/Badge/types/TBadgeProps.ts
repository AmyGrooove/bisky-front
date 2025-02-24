import { IIconProps } from '@shared/types'
import { ReactNode } from 'react'

interface IBadgePropsBase {
  iconText?: string
  variant?: 'small' | 'medium' | 'big'
  className?: string
  isCustomColor?: boolean
  isCustomTextColor?: boolean
}

interface IBadgePropsWithChildren extends IBadgePropsBase {
  children: string

  Icon?: (props: IIconProps) => ReactNode
}

interface IBadgePropsWithIcon extends IBadgePropsBase {
  Icon: (props: IIconProps) => ReactNode

  children?: string
}

type TBadgeProps = IBadgePropsWithChildren | IBadgePropsWithIcon

export type { TBadgeProps }
