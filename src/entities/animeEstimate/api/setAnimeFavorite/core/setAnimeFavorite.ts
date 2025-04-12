import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { ISetAnimeFavoriteRequest } from '../types/ISetAnimeFavoriteRequest'

const setAnimeFavorite = async (body: ISetAnimeFavoriteRequest) => {
  const url = new URL(`/animeEstimate/favorite`, ENV.API_URL)

  return apiFetchPost(url, 'PUT', { body })
}

export { setAnimeFavorite }
