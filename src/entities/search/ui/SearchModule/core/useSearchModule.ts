import { useSearchAnimeAndUsers } from '@entities/search/api/searchAnimeAndUsers'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'
import { closeModal } from '@widgets/ModalWrapper'
import { useCallNoAuthorize } from '@widgets/NoAuthorize'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

const useSearchModule = () => {
  const { push } = useRouter()

  const isMobile = useIsMobile()

  const openNoAuthorize = useCallNoAuthorize()

  const [searchValue, setSearchValue] = useState('')

  const [debouncedSearchValue] = useDebounce(searchValue, 300)

  const { data, isLoading } = useSearchAnimeAndUsers(debouncedSearchValue, {
    enabled: debouncedSearchValue !== '',
  })
  const { animes = [], users = [] } = data ?? {}

  const pushToFastPage = (href: string) => {
    closeModal()

    setTimeout(() => openNoAuthorize({ thenCallback: () => push(href) }), 300)
  }

  return {
    animes,
    users,
    isLoading,
    setSearchValue,
    searchValue,
    debouncedSearchValue,
    isMobile,
    pushToFastPage,
  }
}

export { useSearchModule }
