import { usePatchEpisodeProgress } from '@entities/anime/api/patchEpisodeProgress'
import { CheckIcon, EyeOffIcon } from '@shared/icons'
import { useState } from 'react'

import { IEditEpisodeButtonProps } from '../types/IEditEpisodeButtonProps'

const useEditEpisodeButton = (props: IEditEpisodeButtonProps) => {
  const {
    buttonClassName,
    progressBarClassName,
    variant,
    episodeProgressData,
  } = props
  const { _id, reWatchedCount, firstWatchedAt } = episodeProgressData

  const [currentProgress, setCurrentProgress] = useState(
    episodeProgressData.lastWatchedDuration,
  )

  const { mutateAsync: patchEpisodeProgress } = usePatchEpisodeProgress()

  const hintOptions = [
    {
      IconLeft: CheckIcon,
      text: 'Просмотрено',
      onClick: () => {
        setCurrentProgress(episodeProgressData.duration ?? 0)
        patchEpisodeProgress({
          episodeID: _id,
          body: {
            reWatchedCount,
            firstWatchedAt: new Date(firstWatchedAt),
            isWatched: true,
          },
        })
      },
    },
    {
      IconLeft: EyeOffIcon,
      text: 'Не просмотрено',
      onClick: () => {
        setCurrentProgress(0)
        patchEpisodeProgress({
          episodeID: _id,
          body: {
            reWatchedCount,
            firstWatchedAt: new Date(firstWatchedAt),
            isWatched: false,
          },
        })
      },
    },
  ]

  return {
    buttonClassName,
    progressBarClassName,
    variant,
    hintOptions,
    episodeProgressData,
    currentProgress,
  }
}

export { useEditEpisodeButton }
