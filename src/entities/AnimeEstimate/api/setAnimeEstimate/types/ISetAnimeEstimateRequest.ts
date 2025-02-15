import { TListStatus } from '@entities/animeEstimate'

interface ISetAnimeEstimateRequest {
  animeID: string
  estimateVariant: TListStatus

  isFastFind?: boolean
}

export type { ISetAnimeEstimateRequest }
