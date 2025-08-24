import { getCircleGradient } from '../functions/getCircleGradient'
import { ICircleViewsProps } from '../types/ICircleViewsProps'

const useCircleViews = (props: ICircleViewsProps) => {
  const {
    addedCount = 0,
    completeCount = 0,
    watchingCount = 0,
    droppedCount = 0,
    className,
    variant = 'big',
  } = props

  const sumCount = addedCount + completeCount + watchingCount + droppedCount
  const isEmpty = sumCount === 0

  const circleGradient = isEmpty
    ? ''
    : getCircleGradient({
        addedCount,
        completeCount,
        watchingCount,
        droppedCount,
      })

  return {
    isEmpty,
    className,
    circleGradient,
    sumCount,
    variant,
  }
}

export { useCircleViews }
