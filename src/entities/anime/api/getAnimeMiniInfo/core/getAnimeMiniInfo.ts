import { ENV } from '@shared/static'

import { IGetAnimeMiniInfoResponse } from '../types/IGetAnimeMiniInfoResponse'

const getAnimeMiniInfo = async (
  animeID: string,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimeMiniInfoResponse> => {
  const url = new URL(`/anime/miniInfo/${animeID}`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Skip-Auth': String(skipAuth),
    },
    credentials: 'include',
    signal,
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`getAnimeMiniInfo: ${responseData.message}`)

  return responseData
}

export { getAnimeMiniInfo }
