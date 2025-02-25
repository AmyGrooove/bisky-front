import { searchAnimeAndUsers } from '@entities/search/api/searchAnimeAndUsers'
import { TResponse } from '@shared/types'

interface IAvatarElementProps {
  data: TResponse<typeof searchAnimeAndUsers>['users'][number]

  variant?: 'big' | 'small'
  className?: string
}

export type { IAvatarElementProps }
