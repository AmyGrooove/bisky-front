import { useEffect, useState } from "react"
import axios from "axios"

const useSearch = () => {
  const [inputValue, setInputValue] = useState<string>("")
  // const debounceInputValue = useDebounce<string>(inputValue, 250)

  // const [searchResult, setSearchResult] = useState<IPosterAnime[]>([])

  // useEffect(() => {
  //   if (inputValue === "") {
  //     setSearchResult([])
  //   } else {
  //     searchAsync()
  //   }
  // }, [debounceInputValue])

  // const searchAsync = async () => {
  //   setSearchResult(
  //     (await axios.get<IPosterAnime[]>(API_URL + "/search?value=" + inputValue))
  //       .data,
  //   )
  // }

  return { inputValue, setInputValue }
}

export default useSearch
