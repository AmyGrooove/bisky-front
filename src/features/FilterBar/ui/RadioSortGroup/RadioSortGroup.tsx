import { cn } from "@shared/utils/functions"
import { Radiobox, Text } from "@shared/ui/atoms"

import { IRadioSortGroupProps } from "../../types/IRadioSortGroupProps"

import st from "./RadioSortGroup.module.scss"

const RadioSortGroup = (props: IRadioSortGroupProps) => {
  const { items, checkedItem, className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      {items.map((item) => (
        <div className={st.item} key={item.value} onClick={item.setSortValue}>
          <Radiobox
            value={item.value}
            checked={item.value === checkedItem}
            onChange={() => {}}
          />
          <Text>{item.label}</Text>
        </div>
      ))}
    </div>
  )
}

export { RadioSortGroup }
