import { ISkeletonProps } from '../types/ISkeletonProps'

const useSkeleton = (props: ISkeletonProps) => {
  const { className, templates = 'none' } = props

  return { className, templates }
}

export { useSkeleton }
