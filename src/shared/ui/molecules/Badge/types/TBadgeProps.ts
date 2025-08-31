import { ReactNode } from 'react'

interface IBadgePropsBase {
  variant?: 'small' | 'medium' | 'big'
  className?: string
}

interface IBadgePropsWithChildren extends IBadgePropsBase {
  children: ReactNode

  Icon?: ReactNode
}

interface IBadgePropsWithIcon extends IBadgePropsBase {
  Icon: ReactNode

  children?: ReactNode
}

type TBadgeProps = IBadgePropsWithChildren | IBadgePropsWithIcon

export type { TBadgeProps }
