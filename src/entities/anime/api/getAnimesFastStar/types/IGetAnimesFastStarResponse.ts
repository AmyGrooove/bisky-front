import { IAnime } from '@entities/anime/types'
import { TListStatus } from '@entities/animeEstimate/types'

interface IGetAnimesFastStarResponse extends Pick<IAnime, 'poster' | '_id'> {
  label: string
  userListStatus: TListStatus
  isFavorite: boolean
}

export type { IGetAnimesFastStarResponse }
