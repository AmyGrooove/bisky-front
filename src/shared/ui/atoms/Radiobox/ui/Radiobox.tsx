import { cn } from "@shared/utils/functions"

import { IRadioboxProps } from "../types/IRadioboxProps"

import st from "./Radiobox.module.scss"
import { useRadiobox } from "./useRadiobox"

const Radiobox = (props: IRadioboxProps) => {
  const { className, name, otherProps } = useRadiobox(props)

  return (
    <label htmlFor={name} className={cn(st.root, className)}>
      <input
        {...otherProps}
        name={name}
        type="radio"
        className={st.input}
        hidden
      />
    </label>
  )
}

export { Radiobox }
