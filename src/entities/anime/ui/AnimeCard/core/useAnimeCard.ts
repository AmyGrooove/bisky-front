import { isNil } from '@shared/utils/functions'
import { getNormalStatus } from '@entities/anime/functions/getNormalStatus'

import { IAnimeCardProps } from '../types/IAnimeCardProps'

const useAnimeCard = (props: IAnimeCardProps) => {
  const {
    animeData,
    className,
    variant = 'big',
    badges,
    currentUserAnimeStatus = null,
  } = props
  const {
    score: scoreBadge = null,
    reWatchedCount: reWatchedCountBadge = null,
    relation: relationBadge = null,
  } = badges ?? {}

  const statusBadgeText = isNil(animeData.status)
    ? null
    : animeData.status === 'ongoing'
      ? `${animeData.episodeAiredCount ?? 0}/${animeData.episodeCount ?? 0}`
      : getNormalStatus(animeData.status)

  const isBigVariant = variant === 'big'
  const badgeVariant = isBigVariant ? ('medium' as const) : ('small' as const)

  return {
    animeData,
    className,
    variant,
    scoreBadge,
    reWatchedCountBadge,
    relationBadge,
    currentUserAnimeStatus,
    statusBadgeText,
    isBigVariant,
    badgeVariant,
  }
}

export { useAnimeCard }
