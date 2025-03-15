interface IInputCodeProps {
  length: number
  value: string
  onChange: (value: string) => void

  isAutoFocus?: boolean
  className?: string
  label?: string
}

export type { IInputCodeProps }
