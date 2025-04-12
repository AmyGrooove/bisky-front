import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetAnimesFastSelectResponse } from '../types/IGetAnimesFastSelectResponse'

const getAnimesFastSelect = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/anime/fastSelect`, ENV.API_URL)

  return apiFetchGet<IGetAnimesFastSelectResponse[]>(url, options)
}

export { getAnimesFastSelect }
