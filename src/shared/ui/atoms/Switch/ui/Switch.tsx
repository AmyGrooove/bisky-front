import { cn } from "@shared/utils/functions/cn"

import { ISwitchProps } from "../types/ISwitchProps"

import st from "./Switch.module.scss"

const Switch = (props: ISwitchProps) => {
  const { className, ...otherProps } = props

  return (
    <label className={cn(className, st.root)}>
      <input {...otherProps} type="checkbox" className={st.input} hidden />
    </label>
  )
}

export { Switch }
