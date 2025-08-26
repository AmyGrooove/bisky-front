import { getScoreColor } from '../functions/getScoreColor'
import { IScoreBadge } from '../types/IScoreBadge'

const useScoreBadge = (props: IScoreBadge) => {
  const { score, className, ...otherProps } = props

  const scoreColor = getScoreColor(score ?? 0)

  return { scoreColor, score, className, otherProps }
}

export { useScoreBadge }
