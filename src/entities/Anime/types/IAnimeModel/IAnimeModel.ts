import { TListStatus } from "@entities/AnimeEstimate"
import { TKind, TRating, TStatus } from "@entities/Anime"
import { ILanguageModel } from "@shared/types"

interface IAnimeUserDataModel {
  score: number | null
  animeStatus: TListStatus | null
  watchedSeries: number | null
}

interface IAnimeModel {
  _id: string
  shikiId: number
  labels: { en: string | null; ru: string | null; synonyms: string[] }
  poster: string | null
  kind: TKind
  status: TStatus
  episodes: {
    count: number | null
    airedCount: number | null
    nextEpisodeAiredDate: Date | null
    lastEpisodeAiredDate: Date | null
    duration: number | null
  }
  dates: { airedOn: Date | null; releasedOn: Date | null }
  rating: TRating
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
