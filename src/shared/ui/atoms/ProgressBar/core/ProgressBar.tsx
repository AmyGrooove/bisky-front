import { cn } from '@shared/utils/functions'

import { IProgressBarProps } from '../types/IProgressBarProps'

import { useProgressBar } from './useProgressBar'
import st from './ProgressBar.module.scss'

const ProgressBar = (props: IProgressBarProps) => {
  const { className, rootStyle, barStyle } = useProgressBar(props)

  return (
    <div className={cn(st.root, className)} style={rootStyle}>
      <div className={st.bar} style={barStyle} />
    </div>
  )
}

export { ProgressBar }
