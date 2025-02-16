import { IAnime } from '@entities/anime/types'
import { TListStatus } from '@entities/animeEstimate/types'

interface IGetProfileListAnimesResponse extends Pick<IAnime, 'poster' | '_id'> {
  label: string
  score: number
  currentUserScore: number | null
  guestListStatus: TListStatus | null
}

export type { IGetProfileListAnimesResponse }
