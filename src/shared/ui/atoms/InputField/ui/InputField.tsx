import { cn } from "@shared/utils/functions"

import { IInputFieldProps } from "../types/IInputFieldProps"

import st from "./InputField.module.scss"

const InputField = (props: IInputFieldProps) => {
  const { value, onChange, icon, theme = "dark" } = props

  return (
    <div className={cn(st.input, st[theme])}>
      <input {...props} value={value} onChange={onChange} />
      {icon && icon}
    </div>
  )
}

export { InputField }
