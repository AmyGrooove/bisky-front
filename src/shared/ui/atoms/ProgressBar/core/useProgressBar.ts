import { CSSProperties } from 'react'

import { IProgressBarProps } from '../types/IProgressBarProps'

const useProgressBar = (props: IProgressBarProps) => {
  const { progress, max, height = 8, className } = props

  const safeMax = Math.max(0, max)
  const current = safeMax > 0 ? Math.min(safeMax, Math.max(progress, 0)) : 0
  const percent = safeMax > 0 ? (current / safeMax) * 100 : 0

  const rootStyle: CSSProperties = {
    height: `${height}px`,
  }

  const barStyle: CSSProperties = {
    width: `${percent}%`,
  }

  return { className, rootStyle, barStyle }
}

export { useProgressBar }
