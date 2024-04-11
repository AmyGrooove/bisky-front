import { EListStatus } from "@entities/AnimeEstimate"

interface IAnimeEstimatesModel {
  score: number | null
  status: keyof typeof EListStatus | null
  watchedSeries: number | null
}

export type { IAnimeEstimatesModel }
