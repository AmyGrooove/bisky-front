import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { ISetAnimeScoreRequest } from '../types/ISetAnimeScoreRequest'

const setAnimeScore = async (body: ISetAnimeScoreRequest) => {
  const url = new URL(`/animeEstimate/score`, ENV.API_URL)

  return apiFetchPost(url, 'PUT', body)
}

export { setAnimeScore }
