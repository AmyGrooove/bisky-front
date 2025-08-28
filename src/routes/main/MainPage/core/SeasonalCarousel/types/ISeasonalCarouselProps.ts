import { getInitialHomeData } from '@entities/home/api/getInitialHomeData'
import { TResponse } from '@shared/types'

interface ISeasonalCarouselProps {
  seasonalData: TResponse<typeof getInitialHomeData>['seasonalAnimes']

  variant?: 'big' | 'small'
}

export type { ISeasonalCarouselProps }
