import { cn } from "@shared/utils/functions"
import { CheckIcon } from "@shared/icons"
import { Text } from "@shared/ui/atoms"

import { ICheckboxProps } from "../types/ICheckboxProps"

import st from "./Checkbox.module.scss"

const Checkbox = (props: ICheckboxProps) => {
  const {
    className,
    isDash = false,
    isOffDisableStyles = false,
    ...otherProps
  } = props

  return (
    <label
      className={cn(st.root, className, {
        [st.root_offDisable]: isOffDisableStyles,
      })}
    >
      <input {...otherProps} type="checkbox" className={st.input} hidden />
      {isDash ? (
        <Text weight="700" className={st.icon}>
          —
        </Text>
      ) : (
        <CheckIcon className={st.icon} />
      )}
    </label>
  )
}

export { Checkbox }
