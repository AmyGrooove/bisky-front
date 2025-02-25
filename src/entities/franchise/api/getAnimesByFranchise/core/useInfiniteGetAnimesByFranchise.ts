import { useInfiniteQuery } from '@tanstack/react-query'
import { getAnimesByFranchise } from './getAnimesByFranchise'

const useInfiniteGetAnimesByFranchise = (
  franchiseID: string,
  page = 1,
  count = 40,
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      initialPageParam: page,
      queryKey: ['anime', 'franchise', franchiseID, page, count],
      queryFn: async ({ pageParam = page, signal }) => {
        try {
          const response = await getAnimesByFranchise(
            franchiseID,
            pageParam,
            count,
            signal,
          )

          return {
            animes: response.animes,
            currentPage: pageParam,
            franchise: response.franchise,
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
    franchise: data?.pages[0].franchise,
  }

  const fetchNewData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage()
  }

  const isEnd = !hasNextPage && !isFetchingNextPage

  return { data: convertedData, fetchNewData, isEnd, isLoading }
}

export { useInfiniteGetAnimesByFranchise }
