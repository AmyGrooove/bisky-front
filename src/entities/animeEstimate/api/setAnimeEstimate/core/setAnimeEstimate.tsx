import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { ISetAnimeEstimateRequest } from '../types/ISetAnimeEstimateRequest'

const setAnimeEstimate = async (body: ISetAnimeEstimateRequest) => {
  const url = new URL(`/animeEstimate`, ENV.API_URL)

  return apiFetchPost(url, 'POST', { body })
}

export { setAnimeEstimate }
