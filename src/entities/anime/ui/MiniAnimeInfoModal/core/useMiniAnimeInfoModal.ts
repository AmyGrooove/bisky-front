import {
  getNormalKind,
  getNormalStatus,
  getSeasonYear,
  getNormalEpisodeInfo,
  getNormalRating,
} from '@entities/anime/utils/functions'
import { useGetAnimeMiniInfo } from '@entities/anime/api/getAnimeMiniInfo'

import { IMiniAnimeInfoModalProps } from '../types/IMiniAnimeInfoModalProps'

const useMiniAnimeInfoModal = (props: IMiniAnimeInfoModalProps) => {
  const {
    data = null,
    className,
    isModal = true,
    isLoading = false,
    animeID = '',
  } = props

  const { data: fetchedData, isLoading: isFetchedDataLoading } =
    useGetAnimeMiniInfo(animeID)

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
  } = data ?? fetchedData ?? {}

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
    isLoading: isFetchedDataLoading || isLoading,
    data,
    animeID,
  }
}

export { useMiniAnimeInfoModal }
