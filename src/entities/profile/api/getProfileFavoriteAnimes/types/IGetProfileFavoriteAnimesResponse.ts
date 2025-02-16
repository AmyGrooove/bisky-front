import { IAnime } from '@entities/anime/types'
import { TListStatus } from '@entities/animeEstimate/types'

interface IGetProfileFavoriteAnimesResponse
  extends Pick<IAnime, 'poster' | '_id'> {
  label: string
  score: number
  guestListStatus: TListStatus | null
}

export type { IGetProfileFavoriteAnimesResponse }
