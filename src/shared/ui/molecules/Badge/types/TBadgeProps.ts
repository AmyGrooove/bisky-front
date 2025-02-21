import { ReactElement } from 'react'

interface IBadgePropsBase {
  iconText?: string
  variant?: 'small' | 'big'
  className?: string
  isCustomColor?: boolean
}

interface IBadgePropsWithChildren extends IBadgePropsBase {
  children: string

  icon?: ReactElement<HTMLElement>
}

interface IBadgePropsWithIcon extends IBadgePropsBase {
  icon: ReactElement<HTMLElement>

  children?: string
}

type TBadgeProps = IBadgePropsWithChildren | IBadgePropsWithIcon

export type { TBadgeProps }
