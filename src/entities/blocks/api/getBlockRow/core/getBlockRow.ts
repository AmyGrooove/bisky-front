import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetBlockRowResponse } from '../types/IGetBlockRowResponse'

const getBlockRow = async (
  excludedGenreIDs: string[] = [],
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/blocks/row`, ENV.API_URL)
  excludedGenreIDs.forEach((id) =>
    url.searchParams.append('excludedGenreIDs', id),
  )

  return apiFetchGet<IGetBlockRowResponse>(url, options)
}

export { getBlockRow }
