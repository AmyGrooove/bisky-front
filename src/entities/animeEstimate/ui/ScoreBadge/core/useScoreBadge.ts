import { getScoreColor } from '@entities/animeEstimate'

import { TScoreBadge } from '../types/TScoreBadge'

const useScoreBadge = (props: TScoreBadge) => {
  const { score, className, ...otherProps } = props

  const scoreColor = getScoreColor(score)

  return { scoreColor, score, otherProps, className }
}

export { useScoreBadge }
