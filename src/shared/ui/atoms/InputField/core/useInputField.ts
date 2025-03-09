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
    type = 'text',
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
    type,
  }
}

export { useInputField }
