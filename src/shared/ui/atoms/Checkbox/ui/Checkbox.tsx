import { cn } from "@shared/utils/functions"
import { CheckIcon } from "@shared/icons"

import { ICheckboxProps } from "../types/ICheckboxProps"

import st from "./Checkbox.module.scss"

const Checkbox = (props: ICheckboxProps) => {
  const { className, ...otherProps } = props

  return (
    <label className={cn(className, st.root)}>
      <input {...otherProps} type="checkbox" className={st.input} hidden />
      <CheckIcon className={st.icon} />
    </label>
  )
}

export { Checkbox }
