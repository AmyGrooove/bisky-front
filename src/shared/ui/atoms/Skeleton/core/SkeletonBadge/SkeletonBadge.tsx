import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISkeletonBadgeProps } from '../../types/TSkeletonProps'

import st from './SkeletonBadge.module.scss'

const SkeletonBadge = memo(
  forwardRef<HTMLDivElement, ISkeletonBadgeProps>((props, ref) => {
    const { variant = 'big', className, isFlexShrinkEnabled = true } = props

    return (
      <div
        ref={ref}
        className={cn(st.root, className, st[`root_${variant}`], {
          [st.root_flexShrink]: isFlexShrinkEnabled,
        })}
      />
    )
  }),
)

SkeletonBadge.displayName = 'SkeletonBadge'

export { SkeletonBadge }
