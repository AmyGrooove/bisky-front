import { AnimeKindEnum } from "./animeKindEnum"
import { AnimeStatusEnum } from "./animeStatusEnum"

type ShortAnimeInfoType = {
  id: number
  labels: string[]
  poster: string | null
  kind: AnimeKindEnum
  scores: number
  anotherScores: number[]
  status: AnimeStatusEnum
}

export type { ShortAnimeInfoType }
