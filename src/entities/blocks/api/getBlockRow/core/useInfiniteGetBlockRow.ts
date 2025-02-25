import { useInfiniteQuery } from '@tanstack/react-query'
import { getBlockRow } from './getBlockRow'
import { getExcludeGenreIDs } from '@entities/blocks/utils'
import { isNil } from '@shared/utils/functions'

const useInfiniteGetBlockRow = (excludedGenreIDs: string[] = []) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: excludedGenreIDs,
      queryKey: [
        'anime',
        'block',
        'genre',
        'studio',
        'franchise',
        excludedGenreIDs,
      ],
      queryFn: ({ pageParam, signal }) => {
        try {
          return getBlockRow(pageParam, signal)
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
