import { getInitialHomeData } from '@entities/home/api/getInitialHomeData'
import { TResponse } from '@shared/types'

interface ISeasonAnimeCardProps {
  data: TResponse<typeof getInitialHomeData>['seasonalAnimes'][number]

  variant?: 'big' | 'small'
  className?: string
}

export type { ISeasonAnimeCardProps }
