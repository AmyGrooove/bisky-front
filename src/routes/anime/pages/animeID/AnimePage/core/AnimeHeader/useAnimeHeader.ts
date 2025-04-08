import {
  getNormalRating,
  getNormalKind,
  getNormalStatus,
  getSeasonYear,
  getNormalEpisodeInfo,
} from '@entities/anime/utils/functions'

import { IAnimeSectionProps } from '../../types/IAnimeSectionProps'

const useAnimeHeader = (props: IAnimeSectionProps) => {
  const {
    data: {
      labels,
      poster,
      screenshots,
      rating,
      episodes,
      kind,
      status,
      dates,
    },
  } = props

  const label = labels.ru ?? labels.en ?? ''

  const normalRating = getNormalRating(rating)
  const normalKind = getNormalKind(kind)
  const normalStatus = getNormalStatus(status)
  const normalAiredDate = getSeasonYear(dates.airedOn, status === 'anons')

  const episodeInfo = getNormalEpisodeInfo(
    episodes.airedCount,
    episodes.averageDuration,
  )

  return {
    poster,
    screenshots,
    label,
    normalAiredDate,
    normalKind,
    normalRating,
    normalStatus,
    episodeInfo,
    status,
  }
}

export { useAnimeHeader }
