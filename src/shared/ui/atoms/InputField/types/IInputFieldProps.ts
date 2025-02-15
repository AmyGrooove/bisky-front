import { ReactElement } from 'react'

interface IInputFieldProps {
  value: string
  onChange: (value: string) => void

  isDisabled?: boolean
  placeholder?: string
  icon?: ReactElement<HTMLElement>
  className?: string
}

export type { IInputFieldProps }
