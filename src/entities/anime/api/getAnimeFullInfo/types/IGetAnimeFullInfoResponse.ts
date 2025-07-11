import { IAnime } from '@entities/anime/types'
import { TListStatus } from '@entities/animeEstimate/types'

interface IRelatedAnime extends Pick<IAnime, 'poster' | '_id'> {
  relation: string
  label: string
}

interface IUserEstimate {
  listStatus: TListStatus | null
  isFavorite: boolean
  score: number | null
}

interface IListStatusCount {
  added: number
  watching: number
  completed: number
  dropped: number
}

interface IGetAnimeFullInfoResponse
  extends Pick<
    IAnime,
    | 'labels'
    | 'poster'
    | 'kind'
    | 'status'
    | 'episodes'
    | 'dates'
    | 'rating'
    | 'description'
    | 'screenshots'
    | 'franchise'
    | '_id'
    | 'genres'
    | 'studios'
    | 'shikiID'
  > {
  score: number
  scoreCount: number
  related: IRelatedAnime[]
  userEstimate: IUserEstimate
  listStatusCounts: IListStatusCount
  estimateCount: number
}

export type { IGetAnimeFullInfoResponse }
