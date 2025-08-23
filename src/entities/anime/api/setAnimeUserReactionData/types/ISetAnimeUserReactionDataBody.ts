import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface ISetAnimeUserReactionDataBody {
  score: number | null
  isFavorite: boolean
  status: IUserAnimeReactionModel['status']
  reWatchedCount: number
  watchedEpisodes: string[]
}

export type { ISetAnimeUserReactionDataBody }
