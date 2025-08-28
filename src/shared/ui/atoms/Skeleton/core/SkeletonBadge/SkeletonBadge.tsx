import { cn } from '@shared/utils/functions'

import { ISkeletonBadgeProps } from '../../types/TSkeletonProps'

import st from './SkeletonBadge.module.scss'

const SkeletonBadge = (props: ISkeletonBadgeProps) => {
  const { variant, className } = props

  return <div className={cn(st.root, className, st[`root_${variant}`])} />
}

export { SkeletonBadge }
