import { useInfiniteGetAnimesByGenre } from '@entities/genre/api/getAnimesByGenre'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { useParams } from 'next/navigation'

const useGenrePage = () => {
  const { genreID } = useParams()

  const { data, isEnd, fetchNewData, isLoading } = useInfiniteGetAnimesByGenre(
    String(genreID),
  )

  const loadingRef = useInfiniteScroll(fetchNewData)

  const genreName = data.genre?.name ?? 'Жанр'
  const genreDescription = data.genre?.description ?? null

  return {
    animeCards: data.animes,
    genreName,
    genreDescription,
    isEnd,
    loadingRef,
    isLoading,
  }
}

export { useGenrePage }
