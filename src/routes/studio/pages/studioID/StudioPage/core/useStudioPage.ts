import { useInfiniteGetAnimesByStudio } from '@entities/studio/api/getAnimesByStudio'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { useParams } from 'next/navigation'

const useStudioPage = () => {
  const { studioID } = useParams()

  const { data, isEnd, fetchNewData, isLoading } = useInfiniteGetAnimesByStudio(
    String(studioID),
  )

  const loadingRef = useInfiniteScroll(fetchNewData)

  const studioName = data.studio?.name ?? 'Студия'
  const studioDescription = data.studio?.description ?? null

  return {
    animeCards: data.animes,
    studioName,
    studioDescription,
    isEnd,
    loadingRef,
    isLoading,
  }
}

export { useStudioPage }
