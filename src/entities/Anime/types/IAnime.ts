import { TKind } from './TKind'
import { TRating } from './TRating'
import { TStatus } from './TStatus'

interface IAnime {
  _id: string
  shikiID: number
  labels: {
    en: string | null
    ru: string | null
    synonyms: string[]
  }
  poster: string | null
  kind: TKind
  status: TStatus
  episodes: {
    count: number | null
    airedCount: number | null
    nextEpisodeAiredOn: Date | null
    averageDuration: number | null
  }
  dates: {
    airedOn: Date | null
    releasedOn: Date | null
  }
  rating: TRating
  description: string | null
  related: {
    base: string
    shikiID: number | null
    relation: string | null
  }[]
  screenshots: string[]
  genres: string[]
  studios: string[]
  franchise: string | null
  updatedOn: Date
}

export type { IAnime }
