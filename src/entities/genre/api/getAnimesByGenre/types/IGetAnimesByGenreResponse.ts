import { IAnime } from '@entities/anime/types'
import { TListStatus } from '@entities/animeEstimate/types'
import { IGenre } from '@entities/genre/types'

interface IAnimeData
  extends Pick<IAnime, 'poster' | 'status' | 'episodes' | '_id'> {
  label: string
  score: number
  guestListStatus: TListStatus | null
}

interface IGetAnimesByGenreResponse {
  animes: IAnimeData[]
  genre: IGenre
}

export type { IGetAnimesByGenreResponse }
