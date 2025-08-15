interface ITextAreaProps {
  value: string
  onChange: (value: string) => void

  label?: string
  errorText?: string
  isDisabled?: boolean
  placeholder?: string
  className?: string
}

export type { ITextAreaProps }
