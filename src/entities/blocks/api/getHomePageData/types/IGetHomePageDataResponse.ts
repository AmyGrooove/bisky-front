import { IAnime } from '@entities/anime/types'
import { TResponse } from '@shared/types'

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
  rowsAnime: TResponse<typeof getBlockRow>
}

export type { IGetHomePageDataResponse }
