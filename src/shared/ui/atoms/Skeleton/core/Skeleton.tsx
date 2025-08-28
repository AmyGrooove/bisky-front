import { cn } from '@shared/utils/functions'
import { forwardRef } from 'react'

import st from './Skeleton.module.scss'
import { SkeletonSectionLabel } from './SkeletonSectionLabel/SkeletonSectionLabel'
import { SkeletonSeasonalAnimeCard } from './SkeletonSeasonalAnimeCard/SkeletonSeasonalAnimeCard'
import { SkeletonBadge } from './SkeletonBadge/SkeletonBadge'
import { SkeletonAnimeCard } from './SkeletonAnimeCard/SkeletonAnimeCard'

import type { TSkeletonProps } from '../types/TSkeletonProps'

const Skeleton = forwardRef<HTMLDivElement, TSkeletonProps>((props, ref) => {
  if (props.templates === 'badge') {
    return <SkeletonBadge {...props} />
  }

  if (props.templates === 'animeCard') {
    return <SkeletonAnimeCard {...props} />
  }

  if (props.templates === 'seasonalAnimeCard') {
    return <SkeletonSeasonalAnimeCard {...props} />
  }

  if (props.templates === 'sectionLabel') {
    return <SkeletonSectionLabel {...props} />
  }

  const { className } = props
  return <div ref={ref} className={cn(st.none, className)} />
})

Skeleton.displayName = 'Skeleton'

export { Skeleton }
