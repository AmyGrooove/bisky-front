import { ENV } from '@shared/static'

import { IDeleteAnimeEstimateRequest } from '../types/IDeleteAnimeEstimateRequest'

const deleteAnimeEstimate = async (
  body: IDeleteAnimeEstimateRequest,
): Promise<true> => {
  const url = new URL(`/animeEstimate`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const result = await response.json()

  if (!response.ok) throw new Error(`deleteAnimeEstimate: ${result.message}`)

  return result
}

export { deleteAnimeEstimate }
