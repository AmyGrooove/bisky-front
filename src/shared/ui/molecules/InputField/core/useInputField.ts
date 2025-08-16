import { IInputFieldProps } from '../types/IInputFieldProps'

const useInputField = (props: IInputFieldProps) => {
  const {
    value,
    onChange,
    className = null,
    placeholder,
    isDisabled = false,
    errorText,
    label,
    Icon,
    type = 'text',
  } = props

  return {
    value,
    onChange,
    className,
    placeholder,
    isDisabled,
    errorText,
    label,
    Icon,
    type,
  }
}

export { useInputField }
