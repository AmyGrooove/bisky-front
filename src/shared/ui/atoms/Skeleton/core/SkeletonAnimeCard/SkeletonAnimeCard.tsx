import { cn } from '@shared/utils/functions'

import { ISkeletonAnimeCardProps } from '../../types/TSkeletonProps'
import { SkeletonBadge } from '../SkeletonBadge/SkeletonBadge'

import st from './SkeletonAnimeCard.module.scss'

const SkeletonAnimeCard = (props: ISkeletonAnimeCardProps) => {
  const { variant, className } = props

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      <div className={st.card} />
      <div className={st.name} />
      <SkeletonBadge variant={variant === 'big' ? 'medium' : 'small'} />
    </div>
  )
}

export { SkeletonAnimeCard }
