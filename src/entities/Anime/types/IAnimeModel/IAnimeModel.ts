import { EListStatus } from "@entities/AnimeEstimate"
import { EKind, ERating, EStatus } from "@entities/Anime"
import { ILanguageModel } from "@shared/types"

interface IAnimeUserDataModel {
  score: number | null
  animeStatus: keyof typeof EListStatus | null
  watchedSeries: number | null
}

interface IAnimeModel {
  _id: string
  shikiId: number
  labels: { en: string | null; ru: string | null; synonyms: string[] }
  poster: string | null
  kind: keyof typeof EKind
  status: keyof typeof EStatus
  episodes: {
    count: number | null
    airedCount: number
    nextEpisodeAiredDate: Date | null
    lastEpisodeAiredDate: Date | null
    averageDuration: number
    singleEpisodes: {
      name: string | null
      airedOn: Date | null
      duration: number
    }[]
  }
  dates: { airedOn: Date | null; releasedOn: Date | null }
  rating: keyof typeof ERating
  description: ILanguageModel
  screenshots: string[]
  videos: { name: string | null; url: string }[]
  updateDate: Date
  usersList: {
    generalCount: number
    addedCount: number
    watchingCount: number
    completedCount: number
    droppedCount: number
  }
  score: { averageScore: number; count: number }
  userData: IAnimeUserDataModel

  relatedName: string
}

export type { IAnimeModel }
