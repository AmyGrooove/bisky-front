import { ENV } from '@shared/static'

import { IGetAnimeMiniInfoResponse } from '../types/IGetAnimeMiniInfoResponse'

const getAnimeMiniInfo = async (
  animeID: string,
  signal?: AbortSignal,
): Promise<IGetAnimeMiniInfoResponse> => {
  const url = new URL(`/anime/miniInfo/${animeID}`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
    signal,
  })

  if (!response.ok) throw new Error(`getAnimeMiniInfo: ${response.statusText}`)

  return response.json()
}

export { getAnimeMiniInfo }
