import { useInfiniteGetProfileHistory } from '@entities/profile/api/getProfileHistory'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { useParams } from 'next/navigation'

const useHistoryTab = () => {
  const { username } = useParams()

  const { data, fetchNewData, isEnd, isLoading } = useInfiniteGetProfileHistory(
    String(username),
  )

  const loadingRef = useInfiniteScroll(fetchNewData)

  return { data, isLoading, loadingRef, isEnd }
}

export { useHistoryTab }
