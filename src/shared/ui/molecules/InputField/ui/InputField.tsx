import { cn } from "@shared/utils/functions"
import { SearchIcon } from "@/shared/icons"
import { Text } from "@shared/ui/atoms"

import { IInputFieldProps } from "../types/IInputFieldProps"

import st from "./InputField.module.scss"

const InputField = (props: IInputFieldProps) => {
  const {
    variant = "dark",
    isSearchIconOn = false,
    className,
    label,
    ...otherProps
  } = props

  return (
    <div
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_label]: !!label,
      })}
    >
      <input {...otherProps} className={st.input} placeholder="" />
      {label && (
        <Text size="20" className={st.label} isDefaultColor={false}>
          {label}
        </Text>
      )}
      {isSearchIconOn && <SearchIcon className={st.icon} />}
    </div>
  )
}

export { InputField }
