import { ISkeletonProps } from "../types/ISkeletonProps"

const useSkeleton = (props: ISkeletonProps) => {
  const { className, templates = "none", ...otherProps } = props

  return { className, templates, otherProps }
}

export { useSkeleton }
