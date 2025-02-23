import { ENV } from '@shared/static'

import { IGetAnimesAdminResponse } from '../types/IGetAnimesAdminResponse'

const getAnimesAdmin = async (): Promise<IGetAnimesAdminResponse[]> => {
  const url = new URL(`/anime/allAnimes`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`getAnimesAdmin: ${response.statusText}`)

  return response.json()
}

export { getAnimesAdmin }
