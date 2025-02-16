import { getHomePageData } from '@entities/blocks'
import { TResponse } from '@shared/types'

interface ISeasonProps {
  data: TResponse<typeof getHomePageData>['seasonalAnimes'][number]

  variant?: 'big' | 'small'
  className?: string
}

export type { ISeasonProps }
