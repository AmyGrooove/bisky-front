import { useState } from "react"

import { cn } from "@shared/utils/functions"
import { InputField } from "@shared/ui/molecules"

import { ISearchBlockProps } from "../types/ISearchBlockProps"

import st from "./SearchBlock.module.scss"

const SearchBlock = (props: ISearchBlockProps) => {
  const { className, ...otherProps } = props

  const [searchInput, setSearchInput] = useState("")

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <InputField variant="dark" placeholder="Название аниме" isSearchIconOn />
      <div>{}</div>
    </div>
  )
}

export { SearchBlock }
