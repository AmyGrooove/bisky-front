import { getAnimeFullInfo } from '@entities/anime/api/getAnimeFullInfo'
import { TResponse } from '@shared/types'

interface IAnimeSectionProps {
  data: TResponse<typeof getAnimeFullInfo>
}

export type { IAnimeSectionProps }
