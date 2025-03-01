import { ENV } from '@shared/static'

import { IGetWhoamiResponse } from '../types/IGetWhoamiResponse'

const getWhoami = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetWhoamiResponse> => {
  const url = new URL(`/auth/whoami`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`Очистите куки браузера`)

  return response.json()
}

export { getWhoami }
