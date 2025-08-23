import { IAnimeModel } from './IAnimeModel'

type TAnimeSortType = 'default' | 'popularity' | 'new'

type TSeasonType = 'winter' | 'spring' | 'summer' | 'autumn'

interface IAnimeFIltersAndSort {
  kind?: IAnimeModel['kind'][]
  status?: IAnimeModel['status'][]
  season?: TSeasonType[]
  rating?: IAnimeModel['rating'][]
  startDate?: Date
  endDate?: Date
  sortType?: TAnimeSortType
  search?: string
}

export type { IAnimeFIltersAndSort }
