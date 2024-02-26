import { cn } from "@/shared/utils/functions"

import { ITextProps } from "../Types/ITextProps"

import st from "./Text.module.scss"

const Text = (props: ITextProps) => {
  const {
    children = "Button",
    size,
    weight,
    className,
    as: Element = "div",
  } = props

  return (
    <Element className={cn(st.root, className, st[`${size}`], st[`${weight}`])}>
      {children}
    </Element>
  )
}

export { Text }
