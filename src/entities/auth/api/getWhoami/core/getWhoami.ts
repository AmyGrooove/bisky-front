import { ENV } from '@shared/static'

import { IGetWhoamiResponse } from '../types/IGetWhoamiResponse'

const getWhoami = async (signal?: AbortSignal): Promise<IGetWhoamiResponse> => {
  const url = new URL(`/auth/whoami`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    credentials: 'include',
    cache: 'no-store',
    signal,
  })

  if (!response.ok) throw new Error(`getWhoami: ${response.statusText}`)

  return response.json()
}

export { getWhoami }
