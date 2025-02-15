import { searchAnimeAndUsers } from '@entities/search'

interface IAvatarElementProps {
  data: Awaited<ReturnType<typeof searchAnimeAndUsers>>['users'][number]

  variant?: 'big' | 'small'
  className?: string
}

export type { IAvatarElementProps }
