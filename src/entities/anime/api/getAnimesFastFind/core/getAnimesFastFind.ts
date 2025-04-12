import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetAnimesFastFindResponse } from '../types/IGetAnimesFastFindResponse'

const getAnimesFastFind = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/anime/fastFind`, ENV.API_URL)

  return apiFetchGet<IGetAnimesFastFindResponse[]>(url, options)
}

export { getAnimesFastFind }
