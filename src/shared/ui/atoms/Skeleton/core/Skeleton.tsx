import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import st from './Skeleton.module.scss'
import { SkeletonSectionLabel } from './SkeletonSectionLabel/SkeletonSectionLabel'
import { SkeletonSeasonalAnimeCard } from './SkeletonSeasonalAnimeCard/SkeletonSeasonalAnimeCard'
import { SkeletonBadge } from './SkeletonBadge/SkeletonBadge'
import { SkeletonAnimeCard } from './SkeletonAnimeCard/SkeletonAnimeCard'
import { SkeletonAnimeCardCarouselRow } from './SkeletonAnimeCardCarouselRow/SkeletonAnimeCardCarouselRow'
import { SkeletonFactCard } from './SkeletonFactCard/SkeletonFactCard'
import { SkeletonBigButton } from './SkeletonBigButton/SkeletonBigButton'

import type { TSkeletonProps } from '../types/TSkeletonProps'

const Skeleton = memo(
  forwardRef<HTMLDivElement, TSkeletonProps>((props, ref) => {
    if (props.templates === 'animeCardCarouselRow') {
      return <SkeletonAnimeCardCarouselRow ref={ref} {...props} />
    }

    if (props.templates === 'badge') {
      return <SkeletonBadge ref={ref} {...props} />
    }

    if (props.templates === 'bigButton') {
      return <SkeletonBigButton ref={ref} {...props} />
    }

    if (props.templates === 'factCard') {
      return <SkeletonFactCard ref={ref} {...props} />
    }

    if (props.templates === 'animeCard') {
      return <SkeletonAnimeCard ref={ref} {...props} />
    }

    if (props.templates === 'seasonalAnimeCard') {
      return <SkeletonSeasonalAnimeCard ref={ref} {...props} />
    }

    if (props.templates === 'sectionLabel') {
      return <SkeletonSectionLabel ref={ref} {...props} />
    }

    const { className, isFlexShrinkEnabled = true } = props
    return (
      <div
        ref={ref}
        className={cn(st.none, className, {
          [st.none_flexShrink]: isFlexShrinkEnabled,
        })}
      />
    )
  }),
)

Skeleton.displayName = 'Skeleton'

export { Skeleton }
