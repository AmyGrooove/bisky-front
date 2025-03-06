import { useInfiniteGetProfileListAnimes } from '@entities/profile/api/getProfileListAnimes'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { listStatusArray } from '../../static/listStatusArray'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'

const useListSections = () => {
  const { username } = useParams()

  const [isOneTimeLoaded, setIsOneTimeLoaded] = useState(false)

  const [activeTab, setActiveTab] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  const selectedListStatus = useMemo(
    () => listStatusArray[activeTab],
    [activeTab],
  )

  const isMobile = useIsMobile()

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

  useEffect(() => {
    if (!isOneTimeLoaded && !isLoading) setIsOneTimeLoaded(true)
  }, [activeTab])

  return {
    activeTab,
    setActiveTab,
    isMobile,
    data,
    isEnd,
    isLoading,
    loadingRef,
    searchValue,
    setSearchValue,
    isSearchValueEmpty,
    isOneTimeLoaded,
  }
}

export { useListSections }
