import { useInfiniteQuery } from '@tanstack/react-query'
import { getProfileHistory } from './getProfileHistory'

const useInfiniteGetProfileHistory = (
  username: string,
  page = 1,
  count = 40,
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      initialPageParam: page,
      queryKey: ['profile', username, 'history'],
      queryFn: async ({ pageParam = page, signal }) => {
        try {
          const response = await getProfileHistory(
            username,
            pageParam,
            count,
            false,
            signal,
          )

          return { history: response, currentPage: pageParam }
        } catch (_) {
          return { history: [], currentPage: pageParam }
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.history.length < count) return undefined

        return lastPage.currentPage + 1
      },
    })

  const convertedData = data?.pages.flatMap(({ history }) => history) || []

  const fetchNewData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage()
  }

  const isEnd = !hasNextPage && !isFetchingNextPage

  return { data: convertedData, fetchNewData, isEnd, isLoading }
}

export { useInfiniteGetProfileHistory }
