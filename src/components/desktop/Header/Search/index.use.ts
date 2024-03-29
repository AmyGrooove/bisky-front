import { useEffect, useState } from "react"
import axios from "axios"

import { useDebounce } from "@/supportingTool/functions"
import { IPosterAnime } from "@/supportingTool/types"
import { API_URL } from "@/supportingTool/constatns"

const useSearch = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const debounceInputValue = useDebounce<string>(inputValue, 250)

  const [searchResult, setSearchResult] = useState<IPosterAnime[]>([])

  useEffect(() => {
    if (inputValue === "") {
      setSearchResult([])
    } else {
      searchAsync()
    }
  }, [debounceInputValue])

  const searchAsync = async () => {
    setSearchResult(
      (await axios.get<IPosterAnime[]>(API_URL + "/search?value=" + inputValue))
        .data,
    )
  }

  return { inputValue, setInputValue, searchResult }
}

export default useSearch
