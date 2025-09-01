import { cn, getEmptyArray } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISkeletonAnimeCardCarouselRowProps } from '../../types/TSkeletonProps'
import { SkeletonAnimeCard } from '../SkeletonAnimeCard/SkeletonAnimeCard'
import { SkeletonSectionLabel } from '../SkeletonSectionLabel/SkeletonSectionLabel'

import st from './SkeletonAnimeCardCarouselRow.module.scss'

const SkeletonAnimeCardCarouselRow = memo(
  forwardRef<HTMLDivElement, ISkeletonAnimeCardCarouselRowProps>(
    (props, ref) => {
      const { variant = 'big', className, isFlexShrinkEnabled = true } = props

      return (
        <div
          ref={ref}
          className={cn(st.root, className, st[`root_${variant}`], {
            [st.root_flexShrink]: isFlexShrinkEnabled,
          })}
        >
          <SkeletonSectionLabel variant={variant} isLinkEnabled />
          <div className={cn(st.animeCards, st[`animeCards_${variant}`])}>
            {getEmptyArray(12).map((_, index) => (
              <SkeletonAnimeCard key={index} variant={variant} />
            ))}
          </div>
        </div>
      )
    },
  ),
)

SkeletonAnimeCardCarouselRow.displayName = 'SkeletonAnimeCardCarouselRow'

export { SkeletonAnimeCardCarouselRow }
