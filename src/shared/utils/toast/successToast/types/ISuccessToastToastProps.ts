import { IIconProps } from '@shared/types'
import { ReactNode } from 'react'

interface ISuccessToastToastProps {
  message: string

  Icon?: (props: IIconProps) => ReactNode
}

export type { ISuccessToastToastProps }
