import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IAddAnimeToSkipRequest } from '../types/IAddAnimeToSkipRequest'

const addAnimeToSkip = async (body: IAddAnimeToSkipRequest) => {
  const url = new URL(`/animeEstimate/skipList`, ENV.API_URL)

  return apiFetchPost(url, 'POST', { body })
}

export { addAnimeToSkip }
