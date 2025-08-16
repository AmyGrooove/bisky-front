import { cn } from '@shared/utils/functions'
import { forwardRef } from 'react'

import { useSkeleton } from './useSkeleton'
import st from './Skeleton.module.scss'

import type { ISkeletonProps } from '../types/ISkeletonProps'

const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>((props, ref) => {
  const { className, templates } = useSkeleton(props)

  return {
    none: <div ref={ref} className={cn(st.root, className)} />,
  }[templates]
})

Skeleton.displayName = 'Skeleton'

export { Skeleton }
