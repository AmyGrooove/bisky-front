import { cn } from '@shared/utils/functions'

import { ISkeletonProps } from '../types/ISkeletonProps'

import st from './Skeleton.module.scss'
import { useSkeleton } from './useSkeleton'

const Skeleton = (props: ISkeletonProps) => {
  const { className, templates } = useSkeleton(props)

  return {
    season: <div className={cn(st.root, st.root_season, className)} />,
    animeCard: <div className={cn(st.root, st.root_animeCard, className)} />,
    label: <div className={cn(st.root, st.root_label, className)} />,
    none: <div className={cn(st.root, className)} />,
  }[templates]
}

export { Skeleton }
