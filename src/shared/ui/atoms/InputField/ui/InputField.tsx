import { cn } from "@shared/utils/functions"
import { SearchIcon } from "@/shared/icons"

import { IInputFieldProps } from "../types/IInputFieldProps"

import st from "./InputField.module.scss"

const InputField = (props: IInputFieldProps) => {
  const { variant = "dark", isSearchIconOn = false, ...otherProps } = props

  return (
    <div className={cn(st.root, st[`root_${variant}`])}>
      <input {...otherProps} className={st.input} />
      {isSearchIconOn && <SearchIcon className={st.icon} />}
    </div>
  )
}

export { InputField }
