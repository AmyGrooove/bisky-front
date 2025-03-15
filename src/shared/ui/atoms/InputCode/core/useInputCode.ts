import { IInputCodeProps } from '../types/IInputCodeProps'

const useInputCode = (props: IInputCodeProps) => {
  const {
    length,
    value,
    onChange,
    className,
    isAutoFocus = false,
    label,
  } = props

  const handleChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      onChange(value)
    }
  }

  return { length, value, handleChange, className, isAutoFocus, label }
}

export { useInputCode }
