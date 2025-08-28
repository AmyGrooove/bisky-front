import { cn } from '@shared/utils/functions'
import { forwardRef } from 'react'

import st from './Skeleton.module.scss'

import type { TSkeletonProps } from '../types/TSkeletonProps'

const Skeleton = forwardRef<HTMLDivElement, TSkeletonProps>((props, ref) => {
  if (
    props.templates === 'animeCard' ||
    props.templates === 'seasonalAnimeCard'
  ) {
    const { variant = 'big', className } = props
    return (
      <div
        className={cn(
          st.root,
          st[`root_${props.templates}`],
          st[`root_${variant}`],
          className,
        )}
      />
    )
  }

  if (props.templates === 'sectionLabel') {
    const { variant = 'big', isLinkEnabled = false, className } = props
    return (
      <div className={cn(st.root, st.root_sectionLabel, className)}>
        <div className={cn(st.label, st[`label_${variant}`])} />
        {isLinkEnabled && (
          <div className={cn(st.label, st[`label_${variant}`])} />
        )}
      </div>
    )
  }

  const { className } = props
  return <div ref={ref} className={cn(st.root, st.root_none, className)} />
})

Skeleton.displayName = 'Skeleton'

export { Skeleton }
