import { IIconProps } from '@shared/types'
import { ReactNode } from 'react'

interface IInputFieldProps {
  value: string
  onChange: (value: string) => void

  isDisabled?: boolean
  placeholder?: string
  Icon?: (props: IIconProps) => ReactNode
  className?: string
}

export type { IInputFieldProps }
