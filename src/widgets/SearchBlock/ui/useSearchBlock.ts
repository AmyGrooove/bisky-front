import { useState, useEffect } from "react"

import { IAnimeFullModel } from "@entities/Anime"
import { getSearchAnimes } from "@entities/Anime/api"
import { useDebounce } from "@shared/utils/hooks"

import { ISearchBlockProps } from "../types/ISearchBlockProps"

const useSearchBlock = (props: ISearchBlockProps) => {
  const { className, ...otherProps } = props

  const [isLoading, setIsLoading] = useState(false)

  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState<IAnimeFullModel[]>([])

  const debouncedSearchInput = useDebounce(searchInput, 500)

  const changeInput = (value: string) => {
    setIsLoading(value === "" ? false : true)
    setSearchInput(value)
  }

  const fetchSearchAnimesData = () =>
    getSearchAnimes(searchInput)
      .then((response) => setSearchResults(response))
      .finally(() => setIsLoading(false))

  useEffect(() => {
    if (debouncedSearchInput) fetchSearchAnimesData()
  }, [debouncedSearchInput])

  return {
    searchInput,
    changeInput,
    isLoading,
    searchResults,
    className,
    otherProps,
  }
}

export { useSearchBlock }
