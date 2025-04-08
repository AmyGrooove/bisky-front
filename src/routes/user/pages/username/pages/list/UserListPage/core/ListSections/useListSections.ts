import { useInfiniteGetProfileListAnimes } from '@entities/profile/api/getProfileListAnimes'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'

import { listStatusArray } from '../../static/listStatusArray'

const useListSections = () => {
  const { username } = useParams()

  const [activeTab, setActiveTab] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  const selectedListStatus = useMemo(
    () => listStatusArray[activeTab],
    [activeTab],
  )

  const { data, fetchNewData, isEnd, isLoading } =
    useInfiniteGetProfileListAnimes(
      String(username),
      selectedListStatus,
      searchValue,
    )

  const loadingRef = useInfiniteScroll(fetchNewData)

  const isSearchValueEmpty = searchValue === ''

  useEffect(() => {
    setSearchValue('')
  }, [activeTab])

  return {
    activeTab,
    setActiveTab,
    data,
    isEnd,
    isLoading,
    loadingRef,
    searchValue,
    setSearchValue,
    isSearchValueEmpty,
  }
}

export { useListSections }
