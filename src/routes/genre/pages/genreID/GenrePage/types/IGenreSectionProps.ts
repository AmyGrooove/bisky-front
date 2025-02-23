import { getAnimesByGenre } from '@entities/genre/api'
import { TResponse } from '@shared/types'

interface IGenreSectionProps {
  data: TResponse<typeof getAnimesByGenre>
}

export type { IGenreSectionProps }
