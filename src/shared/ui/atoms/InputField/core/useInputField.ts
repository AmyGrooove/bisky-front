import { IInputFieldProps } from '../types/IInputFieldProps'

const useInputField = (props: IInputFieldProps) => {
  const {
    value,
    onChange,
    Icon = null,
    className = null,
    placeholder,
    isDisabled = false,
  } = props

  return { value, onChange, Icon, className, placeholder, isDisabled }
}

export { useInputField }
