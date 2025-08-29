import { useMemo } from 'react'

import { getScoreColor } from '../functions/getScoreColor'
import { IScoreBadge } from '../types/IScoreBadge'

const useScoreBadge = (props: IScoreBadge) => {
  const { score, className, ...otherProps } = props

  const scoreColor = useMemo(() => getScoreColor(score ?? 0), [score])

  return { scoreColor, score, className, otherProps }
}

export { useScoreBadge }
