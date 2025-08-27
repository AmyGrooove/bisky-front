interface IInputCodeProps {
  length: number
  value: string
  onChange: (value: string) => void

  className?: string
  label?: string
  errorText?: string
  isDisabled?: boolean
}

export type { IInputCodeProps }
