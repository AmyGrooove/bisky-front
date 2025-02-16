import { THomeRowDataType } from '@entities/blocks/types'
import { getAnimesByGenre } from '@entities/genre/api'
import { TResponse } from '@shared/types'

interface IGetBlockRowResponse {
  dataType: THomeRowDataType

  genreData?: TResponse<typeof getAnimesByGenre>
}

export type { IGetBlockRowResponse }
