import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISkeletonBigButtonProps } from '../../types/TSkeletonProps'

import st from './SkeletonBigButton.module.scss'

const SkeletonBigButton = memo(
  forwardRef<HTMLDivElement, ISkeletonBigButtonProps>((props, ref) => {
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

SkeletonBigButton.displayName = 'SkeletonBigButton'

export { SkeletonBigButton }
