import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'

import { IInfiniteRowsProps } from '../../types/IInfiniteRowsProps'
import { useInfiniteGetBlockRow } from '@entities/blocks/api/getBlockRow'
import { useMemo } from 'react'

const useInfiniteRows = (props: IInfiniteRowsProps) => {
  const { excludeGenreIDs, initialRowData } = props

  const { data, isEnd, fetchNewData } = useInfiniteGetBlockRow(excludeGenreIDs)

  const loadingRef = useInfiniteScroll(fetchNewData, 0)

  const rowData = useMemo(
    () => [...initialRowData, ...data],
    [initialRowData, data],
  )

  return { rowData, loadingRef, isEnd }
}

export { useInfiniteRows }
