import {
  getNormalKind,
  getNormalStatus,
  getSeasonYear,
  getNormalEpisodeInfo,
  getNormalRating,
} from '@entities/anime/utils/functions'
import { IMiniAnimeInfoModalProps } from '../types/IMiniAnimeInfoModalProps'

const useMiniAnimeInfoModal = (props: IMiniAnimeInfoModalProps) => {
  const { data = null, className, isModal = true, isLoading = false } = props
  const {
    _id = '',
    genres = [],
    studios = [],
    score = 0,
    kind = 'tv',
    screenshots = [],
    status = 'released',
    dates = { airedOn: new Date() },
    episodes = { airedCount: 0, averageDuration: 0 },
    label = '',
    description = null,
    rating = 'pg_13',
  } = data ?? {}

  const connectedGenres = genres.join(', ')
  const connectedStudios = studios.join(', ')

  const normalKind = getNormalKind(kind)
  const normalStatus = getNormalStatus(status)
  const normalAiredDate = getSeasonYear(dates.airedOn, status === 'anons')

  const episodeInfo = getNormalEpisodeInfo(
    episodes.airedCount,
    episodes.averageDuration,
  )

  const normalRating = getNormalRating(rating)

  const currentAnimeHref = `/anime/${_id}`

  return {
    connectedGenres,
    connectedStudios,
    score,
    normalKind,
    normalStatus,
    normalAiredDate,
    episodeInfo,
    label,
    description,
    screenshots,
    normalRating,
    status,
    className,
    isModal,
    currentAnimeHref,
    isLoading,
    data,
  }
}

export { useMiniAnimeInfoModal }
