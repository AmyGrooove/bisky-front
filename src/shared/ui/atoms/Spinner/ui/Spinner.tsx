import { cn } from "@shared/utils/functions"

import { ISpinnerProps } from "../types/ISpinnerProps"

import st from "./Spinner.module.scss"

const Spinner = (props: ISpinnerProps) => {
  const { color = "bisky", className, ...otherProps } = props

  return (
    <div
      {...otherProps}
      className={cn(st.root, className, st[`root_${color}`])}
    />
  )
}

export { Spinner }
