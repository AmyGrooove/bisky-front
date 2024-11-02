import { useState } from "react"

import { ISetFilterTagsProps } from "../../types/ISetFilterTagsProps"

const useSetFilterTags = (props: ISetFilterTagsProps) => {
  const { items, className, isLoading = false, name, ...otherProps } = props

  const [searchInput, setSearchInput] = useState("")

  const filteredItems = items.filter(
    (item) => !item.isSelected && new RegExp(searchInput, "i").test(item.label),
  )

  const filteredSelectedItems = items.filter((item) => item.isSelected)

  return {
    searchInput,
    setSearchInput,
    filteredSelectedItems,
    filteredItems,
    className,
    isLoading,
    name,
    otherProps,
  }
}

export { useSetFilterTags }
