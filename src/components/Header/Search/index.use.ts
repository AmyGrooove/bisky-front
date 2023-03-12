import { useEffect, useState } from 'react'

import { useDebounce, httpGet } from '@/supportingTool/functions'
import { PosterAnime } from '@/supportingTool/types'

const useSearch = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const debounceInputValue = useDebounce<string>(inputValue, 250)

  const [searchResult, setSearchResult] = useState<PosterAnime[]>([])

  useEffect(() => {
    if (inputValue === '') {
      setSearchResult([])
    } else {
      searchAsync()
    }
  }, [debounceInputValue])

  const searchAsync = async () => {
    setSearchResult(
      await httpGet<PosterAnime[]>('/search?value=' + inputValue),
    )
  }

  return { inputValue, setInputValue, searchResult }
}

export default useSearch
