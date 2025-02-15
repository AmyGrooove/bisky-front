import { cn } from '@shared/utils/functions'

import { ISkeletonProps } from '../types/ISkeletonProps'

import st from './Skeleton.module.scss'
import { useSkeleton } from './useSkeleton'

const Skeleton = (props: ISkeletonProps) => {
  const { className, templates, width, height } = useSkeleton(props)

  return {
    none: (
      <div
        className={cn(st.root, className)}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    ),
  }[templates]
}

export { Skeleton }
