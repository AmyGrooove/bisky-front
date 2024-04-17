import { HTMLAttributes } from "react"

interface ISetFilterTagsItem {
  label: string
  value: string
  isSelected: boolean
  includeItem: () => void
  deleteIncludeItem: () => void
}

interface ISetFilterTagsProps extends HTMLAttributes<HTMLDivElement> {
  items: ISetFilterTagsItem[]
  name: string

  isLoading?: boolean
}

export type { ISetFilterTagsProps, ISetFilterTagsItem }
