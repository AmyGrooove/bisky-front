'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { getEmptyArray } from '@shared/utils/functions'

import { BlockRow } from '../BlockRow/BlockRow'
import { IInfiniteRowsProps } from '../../types/IInfiniteRowsProps'

import st from './InfiniteRows.module.scss'
import { useInfiniteRows } from './useInfiniteRows'

const InfiniteRows = (props: IInfiniteRowsProps) => {
  const { rowData, loadingRef, isEnd } = useInfiniteRows(props)

  return (
    <>
      {rowData.map((row, index) => (
        <BlockRow {...row} key={index} />
      ))}
      {!isEnd && (
        <div className={st.row} ref={loadingRef}>
          <Skeleton templates="label" />
          <div className={st.animeCards}>
            {getEmptyArray(12).map((_, index) => (
              <Skeleton key={index} templates="animeCard" />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export { InfiniteRows }
