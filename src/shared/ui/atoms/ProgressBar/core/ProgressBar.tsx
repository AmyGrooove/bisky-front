import { forwardRef } from 'react'
import { cn } from '@shared/utils/functions'

import { IProgressBarProps } from '../types/IProgressBarProps'

import { useProgressBar } from './useProgressBar'
import st from './ProgressBar.module.scss'

const ProgressBar = forwardRef<HTMLDivElement, IProgressBarProps>(
  (props, ref) => {
    const {
      rootStyle,
      barStyle,
      currentValue,
      validatedMax,
      className,
      ariaLabel,
    } = useProgressBar(props)

    return (
      <div
        className={cn(st.root, className)}
        style={rootStyle}
        ref={ref}
        role="progressbar"
        aria-valuenow={currentValue}
        aria-valuemin={0}
        aria-valuemax={validatedMax}
        aria-label={ariaLabel}
      >
        <div className={st.bar} style={barStyle} />
      </div>
    )
  },
)

export { ProgressBar }
