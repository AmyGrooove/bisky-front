import { useInfiniteGetHomeRow } from '@entities/home/api/getHomeRow'
import { useInViewCall } from '@shared/utils/hooks/useInViewCall'

import { IInfiniteHomeRowProps } from '../types/IInfiniteHomeRowProps'

const useInfiniteHomeRow = (props: IInfiniteHomeRowProps) => {
  const { variant = 'big' } = props

  const { data, isEnd, isPending, isFetchingNextPage, error, fetchNextPage } =
    useInfiniteGetHomeRow()

  const { inViewRef } = useInViewCall(fetchNextPage, {
    isDisabled: isPending || isFetchingNextPage,
  })

  return {
    data,
    inViewRef,
    isEnd,
    variant,
    error,
  }
}

export { useInfiniteHomeRow }
