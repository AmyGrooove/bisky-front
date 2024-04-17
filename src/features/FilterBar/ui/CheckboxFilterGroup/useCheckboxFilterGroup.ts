import { MouseEvent } from "react"

import { ICheckboxFilterGroupItem } from "@features/FilterBar/types/ICheckboxFilterGroupProps"

const useCheckboxFilterGroup = () => {
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

  return { mainClick, excludeButton }
}

export { useCheckboxFilterGroup }
