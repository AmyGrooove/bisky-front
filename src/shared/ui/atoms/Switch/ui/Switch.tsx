import { forwardRef } from "react"

import { cn } from "@/shared/utils/functions/cn"

import { ISwitchProps } from "../types/ISwitchProps"

import st from "./Switch.module.scss"

const Switch = forwardRef(function Switch(props: ISwitchProps) {
  const { inputProps, labelProps } = props
  return (
    <label className={cn(st.toggle_wrapper, labelProps?.className)}>
      <input
        {...inputProps?.attributes}
        type="checkbox"
        className={st.toggle}
      />
      {""}
    </label>
  )
})

export { Switch }
