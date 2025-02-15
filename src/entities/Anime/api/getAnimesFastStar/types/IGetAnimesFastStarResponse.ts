import { IAnime } from '@entities/anime'
import { TListStatus } from '@entities/animeEstimate'

interface IGetAnimesFastStarResponse extends Pick<IAnime, 'poster' | '_id'> {
  label: string
  userListStatus: TListStatus
  isFavorite: boolean
}

export type { IGetAnimesFastStarResponse }
