import { useMemo } from 'react'

import { IProgressBarProps } from '../types/IProgressBarProps'

const useProgressBar = (props: IProgressBarProps) => {
  const { progress, max, height = 8, className } = props

  const percent = useMemo(() => {
    const validatedMax = Math.max(0, max)
    const currentValue =
      validatedMax > 0 ? Math.min(validatedMax, Math.max(progress, 0)) : 0
    return validatedMax > 0 ? (currentValue / validatedMax) * 100 : 0
  }, [progress, max])

  const rootStyle = useMemo(
    () => ({
      height: `${height}px`,
    }),
    [height],
  )

  const barStyle = useMemo(
    () => ({
      width: `${percent}%`,
    }),
    [percent],
  )

  return {
    rootStyle,
    barStyle,
    className,
  }
}

export { useProgressBar }
