import { getAnimesByFranchise } from '@entities/franchise/api'
import { TResponse } from '@shared/types'

interface IFranchiseSectionProps {
  data: TResponse<typeof getAnimesByFranchise>
}

export type { IFranchiseSectionProps }
