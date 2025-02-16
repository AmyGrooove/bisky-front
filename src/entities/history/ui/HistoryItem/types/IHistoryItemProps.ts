import { getProfileHistory } from '@entities/profile/api'
import { TResponse } from '@shared/types'

interface IHistoryItemProps {
  data: TResponse<typeof getProfileHistory>[number]

  variant?: 'big' | 'small'
  className?: string
}

export type { IHistoryItemProps }
