import { getProfileHistory } from '@entities/profile/api'
import { TResponse } from '@shared/types'

interface IHistoryItemProps {
  data: TResponse<typeof getProfileHistory>[number]

  className?: string
}

export type { IHistoryItemProps }
