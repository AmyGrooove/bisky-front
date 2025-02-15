import { TBadgeProps } from '@shared/ui/molecules'

type TScoreBadge = Omit<TBadgeProps, 'children' | 'icon'> & {
  score: number
}

export type { TScoreBadge }
