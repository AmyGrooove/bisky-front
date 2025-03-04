import { useInfiniteGetProfileFavoriteAnimes } from '@entities/profile/api/getProfileFavoriteAnimes'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { useParams } from 'next/navigation'

const useFavoriteTab = () => {
  const { username } = useParams()

  const { data, fetchNewData, isEnd, isLoading } =
    useInfiniteGetProfileFavoriteAnimes(String(username))

  const loadingRef = useInfiniteScroll(fetchNewData)

  return { data, isLoading, loadingRef, isEnd }
}

export { useFavoriteTab }
