import { GenreType } from "@/02-entities/genre"

export interface AnimeSeasonType {
  id: number
  labels: string[]
  poster: string | null
  scores: number
  anotherScores: number[]
  screenshots: string[]
  genres: GenreType[]
}
