import { cn } from '@shared/utils/functions'

import { ISkeletonProps } from '../types/ISkeletonProps'

import st from './Skeleton.module.scss'
import { useSkeleton } from './useSkeleton'

const Skeleton = (props: ISkeletonProps) => {
  const { className, templates } = useSkeleton(props)

  return {
    season: <div className={cn(st.root, st[`root_${templates}`], className)} />,
    animeCard: (
      <div className={cn(st.root, st[`root_${templates}`], className)} />
    ),
    label: <div className={cn(st.root, st[`root_${templates}`], className)} />,
    animeHeader: (
      <div className={cn(st.root, st[`root_${templates}`], className)} />
    ),
    none: <div className={cn(st.root, className)} />,
  }[templates]
}

export { Skeleton }
