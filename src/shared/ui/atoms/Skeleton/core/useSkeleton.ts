import { ISkeletonProps } from '../types/ISkeletonProps'

const useSkeleton = (props: ISkeletonProps) => {
  const { className, templates = 'none', width, height } = props

  return { className, templates, width, height }
}

export { useSkeleton }
