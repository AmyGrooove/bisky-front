interface IUserEpisodeProgressModel {
  _id: string
  animeEpisodeID: string
  author: string
  lastWatchedDuration: number
  reWatchedCount: number
  isWatched: boolean
  updatedAt: string
  firstWatchedAt: string
}

export type { IUserEpisodeProgressModel }
