import { HTMLAttributes } from "react"

interface ICircleViewsProps extends HTMLAttributes<HTMLDivElement> {
  addedCount: number
  completeCount: number
  droppedCount: number
  watchingCount: number
}

export type { ICircleViewsProps }
