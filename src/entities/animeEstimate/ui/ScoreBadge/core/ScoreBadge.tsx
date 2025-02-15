import { Badge } from '@shared/ui/molecules'
import { StarIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'

import { TScoreBadge } from '../types/TScoreBadge'

import { useScoreBadge } from './useScoreBadge'
import st from './ScoreBadge.module.scss'

const ScoreBadge = (props: TScoreBadge) => {
  const { scoreColor, score, otherProps, className } = useScoreBadge(props)

  return (
    <Badge
      {...otherProps}
      icon={<StarIcon />}
      className={cn(st[`root_${scoreColor}`], className)}
    >
      {String(score)}
    </Badge>
  )
}

export { ScoreBadge }
