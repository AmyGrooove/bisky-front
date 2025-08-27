import { cn } from '@shared/utils/functions'
import { forwardRef } from 'react'

import st from './Skeleton.module.scss'

import type { TSkeletonProps } from '../types/TSkeletonProps'

const Skeleton = forwardRef<HTMLDivElement, TSkeletonProps>((props, ref) => {
  if (props.templates === 'animeCard') {
    const { variant = 'big', className } = props
    return (
      <div
        className={cn(st.root, st[`root_animeCard_${variant}`], className)}
      />
    )
  }

  const { className } = props
  return <div ref={ref} className={cn(st.root, className)} />
})

Skeleton.displayName = 'Skeleton'

export { Skeleton }
