type TListStatus = 'added' | 'watching' | 'completed' | 'dropped'

interface IUserAnimeReactionModel {
  status: TListStatus
  author: string
  animeID: string
  score: number | null
  reWatchedCount: number
  isFavorite: boolean
  updatedAt: string
  createdAt: string
}

export type { IUserAnimeReactionModel }
