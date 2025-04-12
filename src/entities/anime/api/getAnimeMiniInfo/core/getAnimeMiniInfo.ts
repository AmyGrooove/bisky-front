import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetAnimeMiniInfoResponse } from '../types/IGetAnimeMiniInfoResponse'

const getAnimeMiniInfo = async (
  animeID: string,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/anime/miniInfo/${animeID}`, ENV.API_URL)

  return apiFetchGet<IGetAnimeMiniInfoResponse>(url, options)
}

export { getAnimeMiniInfo }
