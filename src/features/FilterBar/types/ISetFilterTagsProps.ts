import { HTMLAttributes } from "react"

interface ISetFilterTagsItem {
  label: string
  value: string
}

interface ISetFilterTagsProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  items: ISetFilterTagsItem[]
}

export type { ISetFilterTagsProps, ISetFilterTagsItem }
