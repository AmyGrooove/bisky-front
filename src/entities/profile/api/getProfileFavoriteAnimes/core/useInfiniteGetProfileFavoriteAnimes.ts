import { useInfiniteQuery } from '@tanstack/react-query'

import { getProfileFavoriteAnimes } from './getProfileFavoriteAnimes'

const useInfiniteGetProfileFavoriteAnimes = (
  username: string,
  page = 1,
  count = 20,
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      initialPageParam: page,
      queryKey: ['profile', username, 'favoriteAnimes'],
      queryFn: async ({ pageParam = page, signal }) => {
        try {
          const response = await getProfileFavoriteAnimes(
            username,
            pageParam,
            count,
            { signal },
          )

          return { favoriteAnimes: response, currentPage: pageParam }
        } catch (_) {
          return { favoriteAnimes: [], currentPage: pageParam }
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.favoriteAnimes.length < count) return undefined

        return lastPage.currentPage + 1
      },
    })

  const convertedData =
    data?.pages.flatMap(({ favoriteAnimes }) => favoriteAnimes) || []

  const fetchNewData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage()
  }

  const isEnd = !hasNextPage && !isFetchingNextPage

  return { data: convertedData, fetchNewData, isEnd, isLoading }
}

export { useInfiniteGetProfileFavoriteAnimes }
