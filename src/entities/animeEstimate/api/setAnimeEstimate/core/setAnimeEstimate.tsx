import { ENV } from '@shared/static'

import { ISetAnimeEstimateRequest } from '../types/ISetAnimeEstimateRequest'

const setAnimeEstimate = async (
  body: ISetAnimeEstimateRequest,
): Promise<string> => {
  const url = new URL(`/animeEstimate`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`setAnimeEstimate: ${responseData.message}`)

  return body.animeID
}

export { setAnimeEstimate }
