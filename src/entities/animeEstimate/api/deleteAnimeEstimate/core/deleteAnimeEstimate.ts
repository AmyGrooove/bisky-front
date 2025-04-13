import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IDeleteAnimeEstimateRequest } from '../types/IDeleteAnimeEstimateRequest'

const deleteAnimeEstimate = async (body: IDeleteAnimeEstimateRequest) => {
  const url = new URL(`/animeEstimate`, ENV.API_URL)

  await apiFetchPost(url, 'DELETE', { body })

  return body.animeID
}

export { deleteAnimeEstimate }
