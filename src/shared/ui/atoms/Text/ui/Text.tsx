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
    ...otherProps
  } = props

  return (
    <Element
      {...otherProps}
      className={cn(
        st.root,
        className,
        st[`size_${size}`],
        st[`weight_${weight}`],
      )}
    >
      {children}
    </Element>
  )
}

export { Text }
