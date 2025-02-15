import { IAnime } from '@entities/anime'

import { getBlockRow } from '../../getBlockRow'

interface IAnimeSeasonData
  extends Pick<
    IAnime,
    'poster' | 'kind' | 'status' | 'episodes' | 'screenshots' | '_id' | 'genres'
  > {
  label: string
  score: number
}

interface IGetHomePageDataResponse {
  seasonalAnimes: IAnimeSeasonData[]
  rowsAnime: Awaited<ReturnType<typeof getBlockRow>>
}

export type { IGetHomePageDataResponse }
