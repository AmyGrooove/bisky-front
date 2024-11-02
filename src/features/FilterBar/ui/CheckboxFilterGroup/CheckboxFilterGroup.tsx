import { Text } from "@shared/ui/atoms"
import { Checkbox } from "@shared/ui/molecules"
import { cn } from "@shared/utils/functions"

import { ICheckboxFilterGroupProps } from "../../types/ICheckboxFilterGroupProps"

import st from "./CheckboxFilterGroup.module.scss"
import { useCheckboxFilterGroup } from "./useCheckboxFilterGroup"

const CheckboxFilterGroup = (props: ICheckboxFilterGroupProps) => {
  const { mainClick, excludeButton, items, className, otherProps } =
    useCheckboxFilterGroup(props)

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(st.item, {
            [st.item_checked]: item.isChecked,
            [st.item_exclude]: item.isExclude,
          })}
          onClick={() => mainClick(item)}
        >
          <div className={st.itemLeft}>
            <Checkbox
              isOffDisableStyles
              disabled
              isDash={item.isExclude}
              checked={item.isChecked || item.isExclude}
              onChange={() => {}}
            />
            <Text>{item.label}</Text>
          </div>
          <Text
            className={st.excludeButton}
            isDefaultColor={false}
            onClick={(event) => excludeButton(event, item)}
          >
            {item.isExclude ? "добавить" : "исключить"}
          </Text>
        </div>
      ))}
    </div>
  )
}

export { CheckboxFilterGroup }
