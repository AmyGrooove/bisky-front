import { IIconProps } from '@shared/types'
import { MouseEventHandler, ReactNode } from 'react'

interface ISectionLabelProps {
  children: string

  onClick?: MouseEventHandler<HTMLButtonElement>
  Icon?: (props: IIconProps) => ReactNode
  className?: string
}

export type { ISectionLabelProps }
