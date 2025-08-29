import { useInfiniteGetHomeRow } from '@entities/home/api/getHomeRow'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { isNil } from '@shared/utils/functions'

import { IInfiniteHomeRowProps } from '../types/IInfiniteHomeRowProps'

const useInfiniteHomeRow = (props: IInfiniteHomeRowProps) => {
  const { variant = 'big' } = props

  const { data, isEnd, isPending, error, fetchNextPage } =
    useInfiniteGetHomeRow()

  const loadingRef = useInfiniteScroll({
    onLoadMore: fetchNextPage,
    isDisabled: isEnd || !isNil(error),
    isLoading: isPending,
  })

  return { data, loadingRef, isEnd, variant, error }
}

export { useInfiniteHomeRow }
