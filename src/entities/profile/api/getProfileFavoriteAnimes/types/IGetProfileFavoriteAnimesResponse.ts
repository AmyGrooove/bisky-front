import { IAnime } from '@entities/anime'
import { TListStatus } from '@entities/animeEstimate'

interface IGetProfileFavoriteAnimesResponse
  extends Pick<IAnime, 'poster' | '_id'> {
  label: string
  score: number
  guestListStatus: TListStatus | null
}

export type { IGetProfileFavoriteAnimesResponse }
