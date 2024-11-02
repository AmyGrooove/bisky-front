import { IInputFieldProps } from "../types/IInputFieldProps"

const useInputField = (props: IInputFieldProps) => {
  const {
    variant = "dark",
    isSearchIconOn = false,
    className,
    label,
    placeholder,
    ...otherProps
  } = props

  return {
    variant,
    isSearchIconOn,
    className,
    label,
    placeholder,
    otherProps,
  }
}

export { useInputField }
