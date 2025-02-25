import { useInfiniteGetAnimesByFranchise } from '@entities/franchise/api/getAnimesByFranchise'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { useParams } from 'next/navigation'

const useFranchisePage = () => {
  const { franchiseID } = useParams()

  const { data, isEnd, fetchNewData, isLoading } =
    useInfiniteGetAnimesByFranchise(String(franchiseID))

  const loadingRef = useInfiniteScroll(fetchNewData)

  const franchiseName =
    data.franchise?.name ?? data.franchise?.shikiID ?? 'Франшиза'
  const franchiseDescription = data.franchise?.description ?? null

  return {
    animeCards: data.animes,
    franchiseName,
    franchiseDescription,
    isEnd,
    loadingRef,
    isLoading,
  }
}

export { useFranchisePage }
