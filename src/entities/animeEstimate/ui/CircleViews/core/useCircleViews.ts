import { ICircleViewsProps } from '../types/ICircleViewsProps'
import { getCircleGradient } from '../utils/getCircleGradient'

const useCircleViews = (props: ICircleViewsProps) => {
  const {
    addedCount = 0,
    completeCount = 0,
    watchingCount = 0,
    droppedCount = 0,
    variant = 'big',
    className,
  } = props

  const isEmpty =
    addedCount === 0 &&
    completeCount === 0 &&
    watchingCount === 0 &&
    droppedCount === 0

  const circleGradient = getCircleGradient({
    addedCount,
    completeCount,
    watchingCount,
    droppedCount,
  })

  const sumCount = addedCount + completeCount + watchingCount + droppedCount

  return {
    isEmpty,
    variant,
    className,
    circleGradient,
    sumCount,
  }
}

export { useCircleViews }
