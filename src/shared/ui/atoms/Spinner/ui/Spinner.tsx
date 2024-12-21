import { cn } from "@shared/utils/functions"

import { ISpinnerProps } from "../types/ISpinnerProps"

import st from "./Spinner.module.scss"
import { useSpinner } from "./useSpinner"

const Spinner = (props: ISpinnerProps) => {
  const { color, className, ...otherProps } = useSpinner(props)

  return (
    <div
      {...otherProps.otherProps}
      className={cn(st.root, className, st[`root_${color}`])}
    />
  )
}

export { Spinner }
