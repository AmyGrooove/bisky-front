import { isNil } from '@shared/utils/functions'
import { getNormalStatus } from '@entities/anime/functions/getNormalStatus'

import { IAnimeCardProps } from '../types/IAnimeCardProps'

const useAnimeCard = (props: IAnimeCardProps) => {
  const { animeData, className, variant = 'big', userData } = props
  const {
    reWatchedCount: reWatchedCountBadge = null,
    animeStatus: currentUserAnimeStatus = null,
  } = userData ?? {}

  const statusBadgeText = isNil(animeData.status)
    ? null
    : animeData.status === 'ongoing'
      ? `${animeData.episodeAiredCount ?? '?'}/${animeData.episodeCount ?? '?'}`
      : getNormalStatus(animeData.status)

  const isBigVariant = variant === 'big'
  const badgeVariant = isBigVariant ? ('medium' as const) : ('small' as const)

  return {
    animeData,
    className,
    variant,
    reWatchedCountBadge,
    currentUserAnimeStatus,
    statusBadgeText,
    isBigVariant,
    badgeVariant,
  }
}

export { useAnimeCard }
