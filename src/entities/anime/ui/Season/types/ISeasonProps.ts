import { getHomePageData } from '@entities/blocks/api'
import { TResponse } from '@shared/types'

interface ISeasonProps {
  data: TResponse<typeof getHomePageData>['seasonalAnimes'][number]

  isNotActive?: boolean
  className?: string
}

export type { ISeasonProps }
