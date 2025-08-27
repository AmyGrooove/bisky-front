import { forwardRef } from 'react'
import { cn } from '@shared/utils/functions'

import { IProgressBarProps } from '../types/IProgressBarProps'

import { useProgressBar } from './useProgressBar'
import st from './ProgressBar.module.scss'

const ProgressBar = forwardRef<HTMLDivElement, IProgressBarProps>(
  (props, ref) => {
    const { rootStyle, barStyle, className } = useProgressBar(props)

    return (
      <div className={cn(st.root, className)} style={rootStyle} ref={ref}>
        <div className={st.bar} style={barStyle} />
      </div>
    )
  },
)

export { ProgressBar }
