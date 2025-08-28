import { cn } from '@shared/utils/functions'

import { ISkeletonSeasonalAnimeCardProps } from '../../types/TSkeletonProps'

import st from './SkeletonSeasonalAnimeCard.module.scss'

const SkeletonSeasonalAnimeCard = (props: ISkeletonSeasonalAnimeCardProps) => {
  const { variant, className } = props

  return <div className={cn(st.root, className, st[`root_${variant}`])} />
}

export { SkeletonSeasonalAnimeCard }
