import { cn } from "@shared/utils/functions/cn"

import { ISwitchProps } from "../types/ISwitchProps"

import st from "./Switch.module.scss"
import { useSwitch } from "./useSwitch"

const Switch = (props: ISwitchProps) => {
  const { className, otherProps } = useSwitch(props)

  return (
    <label className={cn(st.root, className)}>
      <input {...otherProps} type="checkbox" className={st.input} hidden />
    </label>
  )
}

export { Switch }
