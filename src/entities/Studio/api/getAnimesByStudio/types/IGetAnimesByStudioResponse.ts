import { IAnime } from '@entities/anime'
import { TListStatus } from '@entities/animeEstimate'
import { IStudio } from '@entities/studio'

interface IAnimeData
  extends Pick<IAnime, 'poster' | 'status' | 'episodes' | '_id'> {
  label: string
  score: number
  userListStatus: TListStatus | null
}

interface IGetAnimesByStudioResponse {
  animes: IAnimeData[]
  studio: IStudio
}

export type { IGetAnimesByStudioResponse }
