import { getBlockRow } from '@entities/blocks/api'
import { TResponse } from '@shared/types'

type TBlockRowProps = TResponse<typeof getBlockRow>[number]

export type { TBlockRowProps }
