import { ISkeletonProps } from "../../types/ISkeletonProps"

const useSkeletonPosterCard = (props: ISkeletonProps) => {
  const { className, ...otherProps } = props

  return { className, otherProps }
}

export { useSkeletonPosterCard }
