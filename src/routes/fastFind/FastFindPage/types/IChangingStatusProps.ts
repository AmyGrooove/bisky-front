import { TListStatus } from '@entities/animeEstimate/types'

interface IChangingStatusProps {
  selectedStatus: TListStatus | 'skipped' | null
  posterHref: string | null
}

export type { IChangingStatusProps }
