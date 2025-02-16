import { THomeRowDataType } from '@entities/blocks'
import { getAnimesByGenre } from '@entities/genre'
import { TResponse } from '@shared/types'

interface IGetBlockRowResponse {
  dataType: THomeRowDataType

  genreData?: TResponse<typeof getAnimesByGenre>
}

export type { IGetBlockRowResponse }
