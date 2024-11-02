import { ICircleViewsProps } from "../types/ICircleViewsProps"

const useCircleViews = (props: ICircleViewsProps) => {
  const {
    className,
    addedCount,
    completeCount,
    watchingCount,
    droppedCount,
    ...otherProps
  } = props

  return {
    className,
    addedCount,
    completeCount,
    watchingCount,
    droppedCount,
    otherProps,
  }
}

export { useCircleViews }
