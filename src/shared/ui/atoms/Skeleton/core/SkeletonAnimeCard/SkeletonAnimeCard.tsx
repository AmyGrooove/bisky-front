import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISkeletonAnimeCardProps } from '../../types/TSkeletonProps'
import { SkeletonBadge } from '../SkeletonBadge/SkeletonBadge'

import st from './SkeletonAnimeCard.module.scss'

const SkeletonAnimeCard = memo(
  forwardRef<HTMLDivElement, ISkeletonAnimeCardProps>((props, ref) => {
    const { variant = 'big', className, isFlexShrinkEnabled = true } = props

    return (
      <div
        ref={ref}
        className={cn(st.root, className, st[`root_${variant}`], {
          [st.root_flexShrink]: isFlexShrinkEnabled,
        })}
      >
        <div className={st.card} />
        <div className={st.name} />
        <SkeletonBadge variant={variant === 'big' ? 'medium' : 'small'} />
      </div>
    )
  }),
)

SkeletonAnimeCard.displayName = 'SkeletonAnimeCard'

export { SkeletonAnimeCard }
