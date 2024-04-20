import { cn } from "@shared/utils/functions"
import { InputField } from "@shared/ui/molecules"
import { Text } from "@shared/ui/atoms"

import { IDatesBetweenSelectorProps } from "../../types/IDatesBetweenSelectorProps"

import st from "./DatesBetweenSelector.module.scss"
import { useDatesBetweenSelector } from "./useDatesBetweenSelector"

const DatesBetweenSelector = (props: IDatesBetweenSelectorProps) => {
  const { from, to, className, ...otherProps } = props

  const { setDate } = useDatesBetweenSelector(props)

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <InputField
        placeholder="от"
        value={String(from ?? "")}
        onChange={(event) => setDate(event.target.value)}
      />
      <Text weight="700" size="32">
        ~
      </Text>
      <InputField
        placeholder="до"
        value={String(to ?? "")}
        onChange={(event) => setDate(event.target.value, false)}
      />
    </div>
  )
}

export { DatesBetweenSelector }
