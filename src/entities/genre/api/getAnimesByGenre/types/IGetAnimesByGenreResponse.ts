import { IAnime } from '@entities/anime'
import { TListStatus } from '@entities/animeEstimate'
import { IGenre } from '@entities/genre'

interface IAnimeData
  extends Pick<IAnime, 'poster' | 'status' | 'episodes' | '_id'> {
  label: string
  score: number
  userListStatus: TListStatus | null
}

interface IGetAnimesByGenreResponse {
  animes: IAnimeData[]
  genre: IGenre
}

export type { IGetAnimesByGenreResponse }
