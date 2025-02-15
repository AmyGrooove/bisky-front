import { getHomePageData } from '@entities/blocks'

interface ISeasonProps {
  data: Awaited<ReturnType<typeof getHomePageData>>['seasonalAnimes'][number]

  variant?: 'big' | 'small'
  className?: string
}

export type { ISeasonProps }
