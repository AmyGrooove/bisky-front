import { getProfileHistory } from '@entities/profile/api/getProfileHistory'
import { TResponse } from '@shared/types'

interface IHistoryItemProps {
  data: TResponse<typeof getProfileHistory>[number]

  className?: string
}

export type { IHistoryItemProps }
