import { cn } from "@/shared/utils/functions"

import { ITextProps } from "../Types/ITextProps"

import st from "./Text.module.scss"

const Text = (props: ITextProps) => {
  const {
    children,
    size,
    weight,
    className,
    as: Element = "div",
  } = props

  return (
    <Element
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
