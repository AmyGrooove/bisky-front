import { API_URL } from '@shared/static'

import { IGetWhoamiResponse } from '../types/IGetWhoamiResponse'

const getWhoami = async (): Promise<IGetWhoamiResponse> => {
  const url = new URL(`/auth/whoami`, API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`getWhoami: ${response.statusText}`)

  return response.json()
}

export { getWhoami }
