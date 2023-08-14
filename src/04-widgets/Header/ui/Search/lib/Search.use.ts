import { useEffect, useRef, useState } from "react"
import { useDebounce, useOnClickOutside } from "usehooks-ts"

import { AnimeInfoType, getAnimePages } from "@/02-entities/anime"

const useSearch = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const debounceInputValue = useDebounce<string>(inputValue, 200)
  const [searchResult, setSearchResult] = useState<AnimeInfoType[]>([])
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputValue === "") {
      setSearchResult([])
    } else {
      searchAnimeInfo()
    }
  }, [debounceInputValue])

  const searchAnimeInfo = async () => {
    const animePages = await getAnimePages(
      undefined,
      undefined,
      undefined,
      debounceInputValue,
    )
    setSearchResult(animePages ? animePages : [])
  }

  const handleClickOutside = () => {
    setInputValue("")
    setSearchResult([])
  }

  useOnClickOutside(inputRef, handleClickOutside)

  return { inputValue, setInputValue, searchResult, inputRef }
}

export { useSearch }
