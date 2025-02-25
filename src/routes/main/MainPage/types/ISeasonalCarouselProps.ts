import { getHomePageData } from '@entities/blocks/api/getHomePageData'
import { TResponse } from '@shared/types'

interface ISeasonalCarouselProps {
  data: TResponse<typeof getHomePageData>['seasonalAnimes']
}

export type { ISeasonalCarouselProps }
