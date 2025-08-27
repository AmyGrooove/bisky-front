import { IProgressBarProps } from '../types/IProgressBarProps'

const useProgressBar = (props: IProgressBarProps) => {
  const { progress, max, height = 8, className } = props

  const validatedMax = Math.max(0, max)
  const currentValue =
    validatedMax > 0 ? Math.min(validatedMax, Math.max(progress, 0)) : 0
  const percent = validatedMax > 0 ? (currentValue / validatedMax) * 100 : 0

  const rootStyle = {
    height: `${height}px`,
  }

  const barStyle = {
    width: `${percent}%`,
  }

  return {
    rootStyle,
    barStyle,
    className,
  }
}

export { useProgressBar }
