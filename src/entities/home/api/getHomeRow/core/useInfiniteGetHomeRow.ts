import { useInfiniteQuery } from '@tanstack/react-query'

import { getHomeRow } from './getHomeRow'

const useInfiniteGetHomeRow = () => {
  const { data, fetchNextPage, isFetching, isFetchingNextPage, error } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ['home', 'row', 'infinite'],
      queryFn: ({ pageParam, signal }) =>
        getHomeRow({
          query: { elementIndex: pageParam },
          optionsGet: { signal },
        }),
      getNextPageParam: (lastPage, _, lastPageParam) => {
        return lastPage.isEnd ? undefined : lastPageParam + 1
      },
    })

  const allPageData = data?.pages.map((page) => page.result) ?? []
  const isEnd = data?.pages.at(-1)?.isEnd ?? false

  return {
    data: allPageData,
    fetchNextPage,
    isPending: isFetching,
    isFetchingNextPage,
    isEnd,
    error,
  }
}

export { useInfiniteGetHomeRow }
