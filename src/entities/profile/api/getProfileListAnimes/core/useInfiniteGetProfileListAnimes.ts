import { useInfiniteQuery } from '@tanstack/react-query'
import { TListStatus } from '@entities/animeEstimate/types'

import { getProfileListAnimes } from './getProfileListAnimes'

const useInfiniteGetProfileListAnimes = (
  username: string,
  listStatus: TListStatus,
  searchValue = '',
  page = 1,
  count = 20,
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      initialPageParam: page,
      queryKey: ['profile', username, 'list', listStatus, searchValue],
      queryFn: async ({ pageParam = page, signal }) => {
        try {
          const response = await getProfileListAnimes(
            username,
            listStatus,
            searchValue,
            pageParam,
            count,
            false,
            signal,
          )

          return { animes: response, currentPage: pageParam }
        } catch (_) {
          return { animes: [], currentPage: pageParam }
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.animes.length < count) return undefined

        return lastPage.currentPage + 1
      },
    })

  const convertedData = data?.pages.flatMap(({ animes }) => animes) || []

  const fetchNewData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage()
  }

  const isEnd = !hasNextPage && !isFetchingNextPage

  return { data: convertedData, fetchNewData, isEnd, isLoading }
}

export { useInfiniteGetProfileListAnimes }
