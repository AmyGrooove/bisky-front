import { AnimeStatusEnum } from "@/02-entities/anime"

interface AnimePosterType {
  id: number
  labels: string[]
  scores: number
  anotherScores: number[]
  status: AnimeStatusEnum
  episodes: {
    count: number | null
    aired: number | null
    duration: number
    nextEpisodeAt: Date | null
  }
}

export type { AnimePosterType }
