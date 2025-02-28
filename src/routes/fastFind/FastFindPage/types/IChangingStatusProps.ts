import { getAnimeMiniInfo } from '@entities/anime/api/getAnimeMiniInfo'
import { TListStatus } from '@entities/animeEstimate/types'
import { TResponse } from '@shared/types'

interface IChangingStatusProps {
  selectedStatus: TListStatus | 'skipped' | null
  posterHref: string | null
  animeData: TResponse<typeof getAnimeMiniInfo> | null
  selectedPreviousStatus: TListStatus | 'skipped' | null
}

export type { IChangingStatusProps }
