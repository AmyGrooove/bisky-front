import { IAnime } from '@entities/anime/types'
import { TListStatus } from '@entities/animeEstimate/types'
import { IStudio } from '@entities/studio/types'

interface IAnimeData
  extends Pick<IAnime, 'poster' | 'status' | 'episodes' | '_id'> {
  label: string
  score: number
  guestListStatus: TListStatus | null
}

interface IGetAnimesByStudioResponse {
  animes: IAnimeData[]
  studio: IStudio
}

export type { IGetAnimesByStudioResponse }
