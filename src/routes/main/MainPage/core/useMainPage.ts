import { useGetHomePageData } from '@entities/blocks/api/getHomePageData'
import { getExcludeGenreIDs } from '@entities/blocks/utils'

const useMainPage = () => {
  const { data, isLoading } = useGetHomePageData()
  const { seasonalAnimes = [], rowsAnime = [] } = data ?? {}

  const excludeGenreIDs = getExcludeGenreIDs(rowsAnime)

  const isHomeLoading =
    isLoading && seasonalAnimes.length === 0 && rowsAnime.length === 0

  return { seasonalAnimes, rowsAnime, excludeGenreIDs, isHomeLoading }
}

export { useMainPage }
