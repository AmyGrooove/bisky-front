import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISkeletonFactCardProps } from '../../types/TSkeletonProps'

import st from './SkeletonFactCard.module.scss'

const SkeletonFactCard = memo(
  forwardRef<HTMLDivElement, ISkeletonFactCardProps>((props, ref) => {
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

SkeletonFactCard.displayName = 'SkeletonFactCard'

export { SkeletonFactCard }
