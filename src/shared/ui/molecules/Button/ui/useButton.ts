import { IButtonProps } from "../types/IButtonProps"

const useButton = (props: IButtonProps) => {
  const {
    children,
    renderLeftIcon,
    renderRightIcon,
    className,
    textProps,
    ...otherProps
  } = props

  return {
    children,
    renderLeftIcon,
    renderRightIcon,
    className,
    textProps,
    otherProps,
  }
}

export { useButton }
