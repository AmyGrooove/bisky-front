import { IAnime } from '@entities/anime/types'

interface IGetAnimeMiniInfoResponse
  extends Pick<
    IAnime,
    | 'poster'
    | 'kind'
    | 'status'
    | 'episodes'
    | 'dates'
    | 'rating'
    | 'description'
    | 'screenshots'
    | '_id'
    | 'genres'
    | 'studios'
  > {
  label: string
  score: number
}

export type { IGetAnimeMiniInfoResponse }
