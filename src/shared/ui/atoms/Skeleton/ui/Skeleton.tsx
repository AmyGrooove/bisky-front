import { cn } from "@shared/utils/functions"

import { ISkeletonProps } from "../types/ISkeletonProps"

import st from "./Skeleton.module.scss"

const Skeleton = (props: ISkeletonProps) => {
  const { className, ...otherProps } = props

  return <div {...otherProps} className={cn(st.root, className)} />
}

export { Skeleton }
