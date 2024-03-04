import { cn } from "@/shared/utils/functions/cn"

import { ISwitchProps } from "../types/ISwitchProps"

import st from "./Switch.module.scss"

const Switch = (props: ISwitchProps) => {
  const { className, ...inputProps } = props

  return (
    <label className={cn(st.toggle_wrapper, className)}>
      <input {...inputProps} type="checkbox" className={st.toggle} />
    </label>
  )
}

export { Switch }
