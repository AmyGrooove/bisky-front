import { getProfileHistory } from '@entities/profile'
import { TResponse } from '@shared/types'

interface IHistoryItemProps {
  data: TResponse<typeof getProfileHistory>[number]

  variant?: 'big' | 'small'
  className?: string
}

export type { IHistoryItemProps }
