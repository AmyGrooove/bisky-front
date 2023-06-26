import { StatusEnum } from "./enums"
import { GenresType } from "./schemas"

export interface AnimePosterCardComponent {
  id: number
  labels: string[]
  scores: number
  anotherScores: number[]
  status: StatusEnum
  episodes: {
    count: number | null
    aired: number | null
    duration: number
    nextEpisodeAt: Date | null
  }
}

export interface AnimeSeasonCardComponent {
  id: number
  labels: string[]
  poster: string | null
  scores: number
  anotherScores: number[]
  screenshots: string[]
  genres: GenresType[]
}
