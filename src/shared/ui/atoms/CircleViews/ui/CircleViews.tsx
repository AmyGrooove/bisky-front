import { cn } from "@shared/utils/functions"

import { getCircleGradient } from "../functions/getCircleGradient"
import { ICircleViewsProps } from "../types/ICircleViewsProps"
import { Skeleton } from "../../Skeleton"

import st from "./CircleViews.module.scss"
import { useCircleViews } from "./useCircleViews"

const CircleViews = (props: ICircleViewsProps) => {
  const {
    className,
    addedCount,
    completeCount,
    watchingCount,
    droppedCount,
    otherProps,
  } = useCircleViews(props)

  return addedCount === 0 &&
    completeCount === 0 &&
    watchingCount === 0 &&
    droppedCount === 0 ? (
    <Skeleton className={cn(st.root, className)} />
  ) : (
    <div
      {...otherProps}
      className={cn(st.root, className)}
      style={{
        background: getCircleGradient({
          addedCount,
          completeCount,
          watchingCount,
          droppedCount,
        }),
      }}
    />
  )
}

export { CircleViews }
