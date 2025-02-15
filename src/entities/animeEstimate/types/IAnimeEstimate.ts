import { TListStatus } from './TListStatus'

interface IAnimeEstimate {
  _id: string
  author: string
  base: string
  listStatus: TListStatus
  score: number | null
  isFavorite: boolean
}

export type { IAnimeEstimate }
