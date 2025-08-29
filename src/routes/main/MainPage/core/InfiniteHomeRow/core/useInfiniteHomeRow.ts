import { useInfiniteGetHomeRow } from '@entities/home/api/getHomeRow'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'

import { IInfiniteHomeRowProps } from '../types/IInfiniteHomeRowProps'

const useInfiniteHomeRow = (props: IInfiniteHomeRowProps) => {
  const { variant = 'big' } = props

  const { data, isEnd, isPending, fetchNextPage } = useInfiniteGetHomeRow()

  const loadingRef = useInfiniteScroll({
    onLoadMore: fetchNextPage,
    isDisabled: isEnd,
    isLoading: isPending,
  })

  return { data, loadingRef, isEnd, variant }
}

export { useInfiniteHomeRow }
