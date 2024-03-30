import { ILanguageModel } from "@shared/types/graphql/ILanguageModel"

import { EKind } from "../enums/EKind"
import { EListStatus } from "../enums/EListStatus"
import { ERating } from "../enums/ERating"
import { EStatus } from "../enums/EStatus"

interface IAnimeModel {
  _id?: string
  shikiId?: number
  labels?: { en?: string | null; ru?: string | null; synonyms?: string[] }
  poster?: string | null
  kind?: EKind
  status?: EStatus
  episodes?: {
    count?: number | null
    airedCount?: number
    nextEpisodeAiredDate?: Date | null
    lastEpisodeAiredDate?: Date | null
    averageDuration?: number
    singleEpisodes?: {
      name?: string | null
      airedOn?: Date | null
      duration?: number
    }[]
  }
  dates?: { airedOn?: Date | null; releasedOn?: Date | null }
  rating?: ERating
  description?: ILanguageModel
  screenshots?: string[]
  videos?: { name?: string | null; url?: string }[]
  updateDate?: Date
  usersList?: {
    generalCount?: number
    addedCount?: number
    watchingCount?: number
    completedCount?: number
    droppedCount?: number
  }
  score?: { averageScore?: number; count?: number }
  userData?: {
    animeStatus?: EListStatus
    score?: number
    watchedSeries?: number
  }
}

export type { IAnimeModel }
