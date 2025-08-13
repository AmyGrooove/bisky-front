import { cn } from '@shared/utils/functions'

import { ISkeletonProps } from '../types/ISkeletonProps'

import st from './Skeleton.module.scss'
import { useSkeleton } from './useSkeleton'
import { forwardRef } from 'react'

const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>((props, ref) => {
  const { className, templates } = useSkeleton(props)

  return {
    none: <div ref={ref} className={cn(st.root, className)} />,
  }[templates]
})

Skeleton.displayName = 'Skeleton'

export { Skeleton }
