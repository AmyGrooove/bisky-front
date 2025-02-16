import { IAnime } from '@entities/anime/types'
import { TListStatus } from '@entities/animeEstimate/types'
import { IFranchise } from '@entities/franchise/types'

interface IAnimeData
  extends Pick<IAnime, 'poster' | 'status' | 'episodes' | '_id'> {
  label: string
  score: number
  guestListStatus: TListStatus | null
}

interface IGetAnimesByFranchiseResponse {
  animes: IAnimeData[]
  franchise: IFranchise
}

export type { IGetAnimesByFranchiseResponse }
