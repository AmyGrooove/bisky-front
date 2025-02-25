import { useSearchAnimeAndUsers } from '@entities/search/api/searchAnimeAndUsers'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

const useSearchModule = () => {
  const [searchValue, setSearchValue] = useState('')

  const [debouncedSearchValue] = useDebounce(searchValue, 300)

  const { data, isLoading } = useSearchAnimeAndUsers(debouncedSearchValue)
  const { animes = [], users = [] } = data ?? {}

  return {
    animes,
    users,
    isLoading,
    setSearchValue,
    searchValue,
    debouncedSearchValue,
  }
}

export { useSearchModule }
