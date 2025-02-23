import { getAnimesByStudio } from '@entities/studio/api'
import { TResponse } from '@shared/types'

interface IStudioSectionProps {
  data: TResponse<typeof getAnimesByStudio>
}

export type { IStudioSectionProps }
