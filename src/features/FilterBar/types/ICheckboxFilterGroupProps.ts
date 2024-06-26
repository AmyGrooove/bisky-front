import { HTMLAttributes } from "react"

interface ICheckboxFilterGroupItem {
  label: string
  isChecked: boolean
  isExclude: boolean
  includeItem: () => void
  deleteIncludeItem: () => void
  excludeItem: () => void
  deleteExcludeItem: () => void
}

interface ICheckboxFilterGroupProps extends HTMLAttributes<HTMLDivElement> {
  items: ICheckboxFilterGroupItem[]
}

export type { ICheckboxFilterGroupProps, ICheckboxFilterGroupItem }
