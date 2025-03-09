import { IInputFieldProps } from '../types/IInputFieldProps'

const useInputField = (props: IInputFieldProps) => {
  const {
    value,
    onChange,
    Icon = null,
    className = null,
    placeholder,
    isDisabled = false,
    errorText,
    label,
  } = props

  return {
    value,
    onChange,
    Icon,
    className,
    placeholder,
    isDisabled,
    errorText,
    label,
  }
}

export { useInputField }
