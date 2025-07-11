import { useInfiniteQuery } from '@tanstack/react-query'
import { getExcludeGenreIDs } from '@entities/blocks/utils'
import { isNil } from '@shared/utils/functions'

import { getBlockRow } from './getBlockRow'

const useInfiniteGetBlockRow = (excludedGenreIDs: string[] = []) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: excludedGenreIDs,
      queryKey: ['blocks', 'row'],
      queryFn: ({ pageParam, signal }) => {
        try {
          return getBlockRow(pageParam, { signal })
        } catch (_) {
          return null
        }
      },
      getNextPageParam: (lastPage, allPages) => {
        if (isNil(lastPage)) return undefined

        const accumulatedRows = allPages.filter((page) => page !== null)
        const newExcludeIDs = getExcludeGenreIDs(accumulatedRows)

        return newExcludeIDs.length > 0 ? newExcludeIDs : undefined
      },
    })

  const convertedData = data?.pages.filter((item) => !isNil(item)).flat() || []

  const fetchNewData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage()
  }

  const isEnd = !hasNextPage && !isFetchingNextPage

  return { data: convertedData, fetchNewData, isEnd }
}

export { useInfiniteGetBlockRow }
