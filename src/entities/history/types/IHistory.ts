import { TListStatus } from '@entities/animeEstimate/types'

import { THistoryTypes } from './THistoryTypes'

interface IHistoryData {
  fastFindSkippedCount?: number | null
  fastFindAddedCount?: number | null
  animeEstimateIsFavorite?: boolean
  animeEstimateScore?: number | null
  animeEstimateListStatus?: TListStatus | null
  _id?: string | null
  poster?: string | null
  label?: string | null
}

interface IHistory {
  _id: string
  author: string
  type: THistoryTypes
  createdOn: Date
  updatedOn: Date
  historyData: IHistoryData
}

export type { IHistory }
