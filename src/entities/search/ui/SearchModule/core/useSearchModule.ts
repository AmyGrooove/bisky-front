import { useSearchAnimeAndUsers } from '@entities/search/api/searchAnimeAndUsers'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

const useSearchModule = () => {
  const isMobile = useIsMobile()

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
    isMobile,
  }
}

export { useSearchModule }
