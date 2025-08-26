import { formatMinutes } from '@shared/utils/functions'

import { IContinueWatchProps } from '../types/IContinueWatchProps'

const useContinueWatch = (props: IContinueWatchProps) => {
  const { episodeProgressData, className, variant = 'big' } = props

  const episodeInfo =
    episodeProgressData.kind === 'movie'
      ? formatMinutes(episodeProgressData.duration || 0)
      : `${episodeProgressData.order} серия • ${formatMinutes(episodeProgressData.duration || 0)}`

  return { episodeProgressData, className, variant, episodeInfo }
}

export { useContinueWatch }
