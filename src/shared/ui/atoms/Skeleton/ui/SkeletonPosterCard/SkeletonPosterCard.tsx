import { cn } from "@shared/utils/functions"

import { ISkeletonProps } from "../../types/ISkeletonProps"
import { Skeleton } from "../Skeleton"

import st from "./SkeletonPosterCard.module.scss"

const SkeletonPosterCard = (props: ISkeletonProps) => {
  const { className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <Skeleton className={st.poster} />
      <div className={st.labelWrapper}>
        <Skeleton className={st.label1} />
        <Skeleton className={st.label2} />
      </div>
      <div className={st.infoWrapper}>
        <Skeleton className={st.info} />
        <Skeleton className={st.info} />
      </div>
    </div>
  )
}

export { SkeletonPosterCard }
