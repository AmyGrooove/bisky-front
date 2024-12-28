import { IButtonProps } from "../types/IButtonProps"

const useButton = (props: IButtonProps) => {
  const { children, leftIcon, rightIcon, className, textProps, ...otherProps } =
    props

  return { children, leftIcon, rightIcon, className, textProps, otherProps }
}

export { useButton }
