import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISkeletonBadgeProps } from '../../types/TSkeletonProps'

import st from './SkeletonBadge.module.scss'

const SkeletonBadge = memo(
  forwardRef<HTMLDivElement, ISkeletonBadgeProps>((props, ref) => {
    const { variant = 'big', className } = props

    return (
      <div
        ref={ref}
        className={cn(st.root, className, st[`root_${variant}`])}
      />
    )
  }),
)

SkeletonBadge.displayName = 'SkeletonBadge'

export { SkeletonBadge }
