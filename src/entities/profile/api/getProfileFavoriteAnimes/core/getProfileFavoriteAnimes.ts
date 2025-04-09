import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetProfileFavoriteAnimesResponse } from '../types/IGetProfileFavoriteAnimesResponse'

const getProfileFavoriteAnimes = async (
  username: string,
  page = 1,
  count = 20,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/profile/${username}/favoriteAnimes`, ENV.API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  return apiFetchGet<IGetProfileFavoriteAnimesResponse[]>(url, options)
}

export { getProfileFavoriteAnimes }
