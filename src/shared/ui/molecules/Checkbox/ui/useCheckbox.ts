import { ICheckboxProps } from "../types/ICheckboxProps"

const useCheckbox = (props: ICheckboxProps) => {
  const {
    className,
    isDash = false,
    isOffDisableStyles = false,
    ...otherProps
  } = props

  return {
    className,
    isDash,
    isOffDisableStyles,
    otherProps,
  }
}

export { useCheckbox }
