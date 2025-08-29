import { useMemo } from 'react'
import { isNil } from '@shared/utils/functions'
import { getNormalStatus } from '@entities/anime/functions/getNormalStatus'

import { IAnimeCardProps } from '../types/IAnimeCardProps'

const useAnimeCard = (props: IAnimeCardProps) => {
  const { animeData, className, variant = 'big', userData } = props
  const {
    reWatchedCount: reWatchedCountBadge = null,
    animeStatus: currentUserAnimeStatus = null,
  } = userData ?? {}

  const statusBadgeText = useMemo(() => {
    if (isNil(animeData.status)) return null

    return animeData.status === 'ongoing'
      ? `${animeData.episodeAiredCount ?? '?'}/${animeData.episodeCount ?? '?'}`
      : getNormalStatus(animeData.status)
  }, [animeData.status, animeData.episodeAiredCount, animeData.episodeCount])

  const isBigVariant = useMemo(() => variant === 'big', [variant])
  const badgeVariant = useMemo(
    () => (isBigVariant ? ('medium' as const) : ('small' as const)),
    [isBigVariant],
  )

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
