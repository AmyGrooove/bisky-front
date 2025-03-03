import { ENV } from '@shared/static'

import { ISetAnimeFavoriteRequest } from '../types/ISetAnimeFavoriteRequest'

const setAnimeFavorite = async (
  body: ISetAnimeFavoriteRequest,
): Promise<string> => {
  const url = new URL(`/animeEstimate/favorite`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`setAnimeFavorite: ${responseData.message}`)

  return body.animeID
}

export { setAnimeFavorite }
