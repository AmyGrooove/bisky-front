import { cn } from "@shared/utils/functions"
import { SearchIcon } from "@/shared/icons"
import { Text } from "@shared/ui/atoms"

import { IInputFieldProps } from "../types/IInputFieldProps"

import st from "./InputField.module.scss"
import { useInputField } from "./useInputField"

const InputField = (props: IInputFieldProps) => {
  const { variant, isSearchIconOn, className, label, placeholder, otherProps } =
    useInputField(props)

  return (
    <div
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_label]: !!label,
      })}
    >
      <input
        {...otherProps}
        className={cn(st.input, { [st.input_label]: !!label })}
        placeholder={placeholder ?? ""}
      />
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
