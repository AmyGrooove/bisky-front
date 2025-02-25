import { ENV } from '@shared/static'

import { ISetAnimeScoreRequest } from '../types/ISetAnimeScoreRequest'

const setAnimeScore = async (body: ISetAnimeScoreRequest): Promise<true> => {
  const url = new URL(`/animeEstimate/score`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const result = await response.json()

  if (!response.ok) throw new Error(`setAnimeScore: ${result.message}`)

  return result
}

export { setAnimeScore }
