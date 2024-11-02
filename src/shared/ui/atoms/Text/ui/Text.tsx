import { cn } from "@shared/utils/functions"

import { ITextProps } from "../types/ITextProps"

import st from "./Text.module.scss"
import { useText } from "./useText"

const Text = (props: ITextProps) => {
  const {
    children,
    size,
    weight,
    className,
    Element,
    isDefaultColor,
    otherProps,
  } = useText(props)

  return (
    <Element
      {...(otherProps as any)}
      className={cn(
        className,
        st.root,
        st[`size_${size}`],
        st[`weight_${weight}`],
        { [st.root_defaultColor]: isDefaultColor },
      )}
    >
      {children !== undefined ? children : ""}
    </Element>
  )
}

export { Text }
