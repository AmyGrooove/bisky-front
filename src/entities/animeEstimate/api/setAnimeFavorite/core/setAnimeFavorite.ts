import { ENV } from '@shared/static'

import { ISetAnimeFavoriteRequest } from '../types/ISetAnimeFavoriteRequest'

const setAnimeFavorite = async (
  body: ISetAnimeFavoriteRequest,
): Promise<true> => {
  const url = new URL(`/animeEstimate/favorite`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const result = await response.json()

  if (!response.ok) throw new Error(`setAnimeFavorite: ${result.message}`)

  return result
}

export { setAnimeFavorite }
