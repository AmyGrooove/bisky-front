import { TBadgeProps } from '@shared/ui/molecules/Badge'

type TScoreBadge = Omit<TBadgeProps, 'children' | 'icon'> & {
  score: number
}

export type { TScoreBadge }
