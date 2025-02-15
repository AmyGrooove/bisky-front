import { THomeRowDataType } from '@entities/blocks'
import { getAnimesByGenre } from '@entities/genre'

interface IGetBlockRowResponse {
  dataType: THomeRowDataType

  genreData?: Awaited<ReturnType<typeof getAnimesByGenre>>
}

export type { IGetBlockRowResponse }
