import { StarIcon } from '@shared/icons'
import { Badge } from '@shared/ui/molecules/Badge'
import { cn } from '@shared/utils/functions'
import { memo } from 'react'

import { IScoreBadge } from '../types/IScoreBadge'

import { useScoreBadge } from './useScoreBadge'
import st from './ScoreBadge.module.scss'

const ScoreBadge = memo((props: IScoreBadge) => {
  const { scoreColor, score, className, otherProps } = useScoreBadge(props)

  return (
    <Badge
      {...otherProps}
      Icon={StarIcon}
      className={cn(className, st[`root_${scoreColor}`])}
    >
      {String(score ?? 0)}
    </Badge>
  )
})

ScoreBadge.displayName = 'ScoreBadge'

export { ScoreBadge }
