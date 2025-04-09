import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { IDeleteAnimeEstimateRequest } from '../types/IDeleteAnimeEstimateRequest'

const deleteAnimeEstimate = async (body: IDeleteAnimeEstimateRequest) => {
  const url = new URL(`/animeEstimate`, ENV.API_URL)

  return apiFetchPost(url, 'DELETE', body)
}

export { deleteAnimeEstimate }
