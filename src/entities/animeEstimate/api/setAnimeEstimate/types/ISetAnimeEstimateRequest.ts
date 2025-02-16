import { TListStatus } from '@entities/animeEstimate/types'

interface ISetAnimeEstimateRequest {
  animeID: string
  estimateVariant: TListStatus

  isFastFind?: boolean
}

export type { ISetAnimeEstimateRequest }
