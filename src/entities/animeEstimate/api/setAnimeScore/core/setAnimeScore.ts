import { API_URL } from '@shared/static'

import { ISetAnimeScoreRequest } from '../types/ISetAnimeScoreRequest'

const setAnimeScore = async (body: ISetAnimeScoreRequest): Promise<true> => {
  const url = new URL(`/animeEstimate/score`, API_URL)

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`setAnimeScore: ${response.statusText}`)

  return response.json()
}

export { setAnimeScore }
