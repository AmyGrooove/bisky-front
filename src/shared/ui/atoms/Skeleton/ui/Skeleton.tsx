import { cn } from "@shared/utils/functions"

import { ISkeletonProps } from "../types/ISkeletonProps"

import st from "./Skeleton.module.scss"
import { SkeletonPosterCard } from "./SkeletonPosterCard/SkeletonPosterCard"

const Skeleton = (props: ISkeletonProps) => {
  const { className, templates = "none", ...otherProps } = props

  return {
    posterCard: <SkeletonPosterCard {...otherProps} className={className} />,
    none: <div {...otherProps} className={cn(st.root, className)} />,
  }[templates]
}

export { Skeleton }
