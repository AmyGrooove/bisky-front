import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface IInputFieldProps {
  value: string
  onChange: (value: string) => void

  Icon?: ComponentType<IIconProps>
  label?: string
  errorText?: string
  isDisabled?: boolean
  placeholder?: string
  className?: string
  inputClassName?: string
  type?: 'password' | 'text'
}

export type { IInputFieldProps }
