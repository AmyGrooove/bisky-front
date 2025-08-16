import { IInputFieldProps } from '../types/IInputFieldProps'

const useInputField = (props: IInputFieldProps) => {
  const {
    value,
    onChange,
    className,
    isDisabled = false,
    errorText,
    label,
    placeholder,
    Icon,
    type = 'text',
  } = props

  return {
    value,
    onChange,
    className,
    isDisabled,
    errorText,
    label,
    placeholder,
    Icon,
    type,
  }
}

export { useInputField }
