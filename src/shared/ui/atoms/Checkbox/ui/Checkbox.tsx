import { cn } from "@shared/utils/functions"

import { ICheckboxProps } from "../types/ICheckboxProps"
import { Text } from "../../Text"

import st from "./Checkbox.module.scss"

const Checkbox = (props: ICheckboxProps) => {
  const { children, className, kind = "check_mark", ...checkboxProps } = props
  return (
    <label className={cn(st.checkbox_wrapper, className)} data-kind={kind}>
      <input type="checkbox" className={st.checkbox} {...checkboxProps} />
      {children && (
        <Text as="span" size="16" weight="400">
          {children}
        </Text>
      )}
    </label>
  )
}

export { Checkbox }
