import { ENV } from '@shared/static'
import {
  apiFetchGet,
  IApiFetchGetOptions,
} from '@shared/utils/functions/apiFetch'

import { IGetAnimeFullInfoResponse } from '../types/IGetAnimeFullInfoResponse'

const getAnimeFullInfo = async (
  animeID: string,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/anime/fullInfo/${animeID}`, ENV.API_URL)

  return apiFetchGet<IGetAnimeFullInfoResponse>(url, options)
}

export { getAnimeFullInfo }
