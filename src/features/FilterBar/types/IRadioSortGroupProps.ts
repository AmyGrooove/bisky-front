import { HTMLAttributes } from "react"

interface IRadioboxItem {
  label: string
  value: string
  setSortValue: () => void
}

interface IRadioSortGroupProps extends HTMLAttributes<HTMLDivElement> {
  items: IRadioboxItem[]
  checkedItem: string
}

export type { IRadioSortGroupProps }
