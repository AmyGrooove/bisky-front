import { getBlockRow } from '@entities/blocks/api/getBlockRow'
import { TResponse } from '@shared/types'

interface IInfiniteRowsProps {
  excludeGenreIDs: string[]
  initialRowData: TResponse<typeof getBlockRow>[]
}

export type { IInfiniteRowsProps }
