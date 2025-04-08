import { useInfiniteQuery } from '@tanstack/react-query'

import { getAnimesByGenre } from './getAnimesByGenre'

const useInfiniteGetAnimesByGenre = (genreID: string, page = 1, count = 40) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      initialPageParam: page,
      queryKey: ['genre', genreID, 'animes'],
      queryFn: async ({ pageParam = page, signal }) => {
        try {
          const response = await getAnimesByGenre(
            genreID,
            pageParam,
            count,
            false,
            signal,
          )

          return {
            animes: response.animes,
            currentPage: pageParam,
            genre: response.genre,
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
    genre: data?.pages[0].genre,
  }

  const fetchNewData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage()
  }

  const isEnd = !hasNextPage && !isFetchingNextPage

  return { data: convertedData, fetchNewData, isEnd, isLoading }
}

export { useInfiniteGetAnimesByGenre }
