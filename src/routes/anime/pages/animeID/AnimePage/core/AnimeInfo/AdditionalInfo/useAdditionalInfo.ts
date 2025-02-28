import {
  getNormalKind,
  getNormalStatus,
  getSeasonYear,
  getNormalEpisodeInfo,
  getRatingWord,
} from '@entities/anime/utils/functions'
import { IAnimeSectionProps } from '../../../types/IAnimeSectionProps'

const useAdditionalInfo = (props: IAnimeSectionProps) => {
  const {
    data: {
      studios,
      genres,
      score,
      scoreCount,
      kind,
      status,
      dates,
      episodes,
      description,
    },
  } = props

  const connectedGenres = genres.join(', ')
  const connectedStudios = studios.join(', ')

  const scoreText = getRatingWord(scoreCount)

  const normalKind = getNormalKind(kind)
  const normalStatus = getNormalStatus(status)
  const normalAiredDate = getSeasonYear(dates.airedOn, status === 'anons')

  const episodeInfo = getNormalEpisodeInfo(
    episodes.airedCount,
    episodes.averageDuration,
  )

  return {
    connectedGenres,
    connectedStudios,
    score,
    scoreText,
    normalKind,
    normalStatus,
    normalAiredDate,
    episodeInfo,
    status,
    description,
  }
}

export { useAdditionalInfo }
