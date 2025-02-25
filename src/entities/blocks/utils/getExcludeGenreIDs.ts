import { getBlockRow } from '@entities/blocks/api/getBlockRow'
import { TResponse } from '@shared/types'
import { isNil } from '@shared/utils/functions'

const getExcludeGenreIDs = (values: TResponse<typeof getBlockRow>[]) =>
  values.map((row) => row.genreData?.genre._id).filter((row) => !isNil(row))

export { getExcludeGenreIDs }
