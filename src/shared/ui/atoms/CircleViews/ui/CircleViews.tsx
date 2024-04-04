import { cn } from "@shared/utils/functions"

import { getCircleGradient } from "../functions/getCircleGradient"
import { ICircleViewsProps } from "../types/ICircleViewsProps"
import { Skeleton } from "../../Skeleton"

import st from "./CircleViews.module.scss"

const CircleViews = (props: ICircleViewsProps) => {
  const { className, ...otherProps } = props

  return otherProps.addedCount === 0 &&
    otherProps.completeCount === 0 &&
    otherProps.watchingCount === 0 &&
    otherProps.droppedCount === 0 ? (
    <Skeleton className={cn(st.root, className)} />
  ) : (
    <div
      {...otherProps}
      className={cn(st.root, className)}
      style={{ background: getCircleGradient(otherProps) }}
    />
  )
}

export { CircleViews }
