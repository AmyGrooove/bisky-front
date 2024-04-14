import { HTMLAttributes } from "react"

interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
  templates?: "none" | "posterCard"
}

export type { ISkeletonProps }
