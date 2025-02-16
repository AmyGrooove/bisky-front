import { API_URL } from '@shared/static'

import { ISetAnimeFavoriteRequest } from '../types/ISetAnimeFavoriteRequest'

const setAnimeFavorite = async (
  body: ISetAnimeFavoriteRequest,
): Promise<true> => {
  const url = new URL(`/animeEstimate/favorite`, API_URL)

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`setAnimeFavorite: ${response.statusText}`)

  return response.json()
}

export { setAnimeFavorite }
