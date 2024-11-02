import { ITextProps } from "../types/ITextProps"

const useText = (props: ITextProps) => {
  const {
    children,
    size = "16",
    weight = "400",
    className,
    as: Element = "div",
    isDefaultColor = true,
    ...otherProps
  } = props

  return {
    children,
    size,
    weight,
    className,
    Element,
    isDefaultColor,
    otherProps,
  }
}

export { useText }
