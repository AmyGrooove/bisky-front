import { cn } from "@shared/utils/functions"

import { ITextProps } from "../types/ITextProps"

import st from "./Text.module.scss"

const Text = (props: ITextProps) => {
  const {
    children,
    size = "16",
    weight = "400",
    className,
    as: Element = "div",
    isDefaultColor = true,
    ...otherProps
  } = props

  return (
    <Element
      {...otherProps}
      className={cn(
        className,
        st.root,
        st[`size_${size}`],
        st[`weight_${weight}`],
        { [st.root_defaultColor]: isDefaultColor },
      )}
    >
      {String(children)}
    </Element>
  )
}

export { Text }
