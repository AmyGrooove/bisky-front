import { getAnimeMiniInfo } from '@entities/anime/api/getAnimeMiniInfo'
import { TResponse } from '@shared/types'

interface IMiniAnimeInfoModalProps {
  animeID?: string
  data?: TResponse<typeof getAnimeMiniInfo> | null
  isLoading?: boolean
  isModal?: boolean
  className?: string
}

export type { IMiniAnimeInfoModalProps }
