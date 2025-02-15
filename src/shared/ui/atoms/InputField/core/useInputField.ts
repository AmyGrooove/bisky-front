import { IInputFieldProps } from '../types/IInputFieldProps'

const useInputField = (props: IInputFieldProps) => {
  const {
    value,
    onChange,
    icon = null,
    className = null,
    placeholder,
    isDisabled = false,
  } = props

  return { value, onChange, icon, className, placeholder, isDisabled }
}

export { useInputField }
