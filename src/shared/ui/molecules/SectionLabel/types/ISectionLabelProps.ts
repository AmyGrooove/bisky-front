import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface ISectionLabelProps {
  children: string

  goBackClick?: () => void
  additionalOnClick?: () => void
  Icon?: ComponentType<IIconProps>
  className?: string
}

export type { ISectionLabelProps }
