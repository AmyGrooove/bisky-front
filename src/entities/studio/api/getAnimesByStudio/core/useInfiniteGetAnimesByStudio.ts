import { useInfiniteQuery } from '@tanstack/react-query'
import { getAnimesByStudio } from './getAnimesByStudio'

const useInfiniteGetAnimesByStudio = (
  studioID: string,
  page = 1,
  count = 40,
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      initialPageParam: page,
      queryKey: ['anime', 'studio', studioID, page, count],
      queryFn: async ({ pageParam = page, signal }) => {
        try {
          const response = await getAnimesByStudio(
            studioID,
            pageParam,
            count,
            signal,
          )

          return {
            animes: response.animes,
            currentPage: pageParam,
            studio: response.studio,
          }
        } catch (_) {
          return { animes: [], currentPage: pageParam }
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.animes.length < count) return undefined

        return lastPage.currentPage + 1
      },
    })

  const convertedData = {
    animes: data?.pages.flatMap(({ animes }) => animes) || [],
    studio: data?.pages[0].studio,
  }

  const fetchNewData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage()
  }

  const isEnd = !hasNextPage && !isFetchingNextPage

  return { data: convertedData, fetchNewData, isEnd, isLoading }
}

export { useInfiniteGetAnimesByStudio }
