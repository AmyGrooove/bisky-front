import { useMemo } from 'react'

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

  const sumCount = useMemo(
    () => addedCount + completeCount + watchingCount + droppedCount,

    [addedCount, completeCount, watchingCount, droppedCount],
  )
  const isEmpty = useMemo(() => sumCount === 0, [sumCount])

  const circleGradient = useMemo(() => {
    if (isEmpty) return ''

    return getCircleGradient({
      addedCount,
      completeCount,
      watchingCount,
      droppedCount,
    })
  }, [addedCount, completeCount, watchingCount, droppedCount, isEmpty])

  return {
    isEmpty,
    className,
    circleGradient,
    sumCount,
    variant,
  }
}

export { useCircleViews }
