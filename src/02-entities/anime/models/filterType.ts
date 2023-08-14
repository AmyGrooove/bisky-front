import { AnimeKindEnum } from "./animeKindEnum"
import { AnimeRatingEnum } from "./animeRatingEnum"
import { AnimeStatusEnum } from "./animeStatusEnum"

type FilterType = {
  [key: string]: any
  kind?: AnimeKindEnum
  status?: AnimeStatusEnum
  rating?: AnimeRatingEnum
  airedOn?: {
    [key: string]: any
    from?: Date
    to?: Date
  }
  genres?: number[]
  studios?: number[]
  franchiseName?: string
}

export type { FilterType }
