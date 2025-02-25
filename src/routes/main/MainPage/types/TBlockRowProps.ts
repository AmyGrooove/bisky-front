import { getBlockRow } from '@entities/blocks/api/getBlockRow'
import { TResponse } from '@shared/types'

type TBlockRowProps = TResponse<typeof getBlockRow>

export type { TBlockRowProps }
