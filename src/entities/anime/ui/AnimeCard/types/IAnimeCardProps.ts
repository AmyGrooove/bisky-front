import { IAnime } from '@entities/anime/types'
import { TListStatus } from '@entities/animeEstimate/types'

interface IAnimeData extends Pick<IAnime, '_id' | 'poster'> {
  label: string

  guestListStatus?: TListStatus | null
  score?: number
  currentUserScore?: number | null
  relation?: string
}

interface IAnimeCardProps {
  data: IAnimeData

  className?: string
}

export type { IAnimeCardProps }
