import { useState, useMemo } from 'react'

import { getBlockRow } from '@entities/blocks/api'
import { TResponse } from '@shared/types'
import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'

import { IInfiniteRowsProps } from '../../types/IInfiniteRowsProps'
import { getExcludeGenreIDs } from '../../utils/getExcludeGenreIDs'

const useInfiniteRows = (props: IInfiniteRowsProps) => {
  const { excludeGenreIDs } = props

  const [rowData, setRowData] = useState<TResponse<typeof getBlockRow>[]>([])
  const [isEnd, setIsEnd] = useState(false)

  const allExcludeGenreIDs = useMemo(
    () => [...excludeGenreIDs, ...getExcludeGenreIDs(rowData)],
    [rowData],
  )

  const getNewRowData = async () => {
    getBlockRow(allExcludeGenreIDs)
      .then((response) => setRowData((prevData) => [...prevData, response]))
      .catch(() => setIsEnd(true))
  }

  const loadingRef = useInfiniteScroll(getNewRowData)

  return { rowData, loadingRef, isEnd }
}

export { useInfiniteRows }
