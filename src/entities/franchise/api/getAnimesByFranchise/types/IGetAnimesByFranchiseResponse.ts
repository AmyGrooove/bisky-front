import { IAnime } from '@entities/anime'
import { TListStatus } from '@entities/animeEstimate'
import { IFranchise } from '@entities/franchise'

interface IAnimeData
  extends Pick<IAnime, 'poster' | 'status' | 'episodes' | '_id'> {
  label: string
  score: number
  userListStatus: TListStatus | null
}

interface IGetAnimesByFranchiseResponse {
  animes: IAnimeData[]
  franchise: IFranchise
}

export type { IGetAnimesByFranchiseResponse }
