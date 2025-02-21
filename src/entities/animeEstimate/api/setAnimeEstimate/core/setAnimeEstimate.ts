import { ENV } from '@shared/static'

import { ISetAnimeEstimateRequest } from '../types/ISetAnimeEstimateRequest'

const setAnimeEstimate = async (
  body: ISetAnimeEstimateRequest,
): Promise<true> => {
  const url = new URL(`/animeEstimate`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`setAnimeEstimate: ${response.statusText}`)

  return response.json()
}

export { setAnimeEstimate }
