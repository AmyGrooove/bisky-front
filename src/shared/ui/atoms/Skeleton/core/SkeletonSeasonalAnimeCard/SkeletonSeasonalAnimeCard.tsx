import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISkeletonSeasonalAnimeCardProps } from '../../types/TSkeletonProps'

import st from './SkeletonSeasonalAnimeCard.module.scss'

const SkeletonSeasonalAnimeCard = memo(
  forwardRef<HTMLDivElement, ISkeletonSeasonalAnimeCardProps>((props, ref) => {
    const { variant = 'big', className } = props

    return (
      <div
        ref={ref}
        className={cn(st.root, className, st[`root_${variant}`])}
      />
    )
  }),
)

SkeletonSeasonalAnimeCard.displayName = 'SkeletonSeasonalAnimeCard'

export { SkeletonSeasonalAnimeCard }
