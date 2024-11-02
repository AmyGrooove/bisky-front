import { MouseEvent } from "react"

import {
  ICheckboxFilterGroupItem,
  ICheckboxFilterGroupProps,
} from "../../types/ICheckboxFilterGroupProps"

const useCheckboxFilterGroup = (props: ICheckboxFilterGroupProps) => {
  const { items, className, ...otherProps } = props

  const mainClick = (item: ICheckboxFilterGroupItem) => {
    if (item.isExclude) item.deleteExcludeItem()
    else if (item.isChecked) item.deleteIncludeItem()
    else item.includeItem()
  }

  const excludeButton = (
    event: MouseEvent<HTMLDivElement>,
    item: ICheckboxFilterGroupItem,
  ) => {
    event.stopPropagation()

    if (item.isExclude) {
      item.deleteExcludeItem()
      item.includeItem()
    } else {
      item.deleteIncludeItem()
      item.excludeItem()
    }
  }

  return { mainClick, excludeButton, items, className, otherProps }
}

export { useCheckboxFilterGroup }
