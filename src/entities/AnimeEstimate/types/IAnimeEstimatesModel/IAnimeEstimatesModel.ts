import { TListStatus } from "@entities/AnimeEstimate"

interface IAnimeEstimatesModel {
  score: number | null
  status: TListStatus | null
  watchedSeries: number | null
}

export type { IAnimeEstimatesModel }
