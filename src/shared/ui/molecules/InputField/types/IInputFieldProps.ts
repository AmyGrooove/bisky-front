import { IIconProps } from '@shared/types'
import { ReactNode } from 'react'

interface IInputFieldProps {
  value: string
  onChange: (value: string) => void

  Icon?: (props: IIconProps) => ReactNode | ReactNode
  label?: string
  errorText?: string
  isDisabled?: boolean
  placeholder?: string
  className?: string
  inputClassName?: string
  type?: 'password' | 'text'
}

export type { IInputFieldProps }
