import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISkeletonSectionLabelProps } from '../../types/TSkeletonProps'

import st from './SkeletonSectionLabel.module.scss'

const SkeletonSectionLabel = memo(
  forwardRef<HTMLDivElement, ISkeletonSectionLabelProps>((props, ref) => {
    const {
      variant = 'big',
      className,
      isLinkEnabled = false,
      isFlexShrinkEnabled = true,
    } = props

    return (
      <div
        ref={ref}
        className={cn(st.root, className, st[`root_${variant}`], {
          [st.root_flexShrink]: isFlexShrinkEnabled,
        })}
      >
        <div className={st.label} />
        {isLinkEnabled && <div className={st.label} />}
      </div>
    )
  }),
)

SkeletonSectionLabel.displayName = 'SkeletonSectionLabel'

export { SkeletonSectionLabel }
