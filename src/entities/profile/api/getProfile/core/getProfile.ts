import { API_URL } from '@shared/static'

import { IGetProfileResponse } from '../types/IGetProfileResponse'

const getProfile = async (username: string): Promise<IGetProfileResponse> => {
  const url = new URL(`/profile/${username}`, API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`getProfile: ${response.statusText}`)

  return response.json()
}

export { getProfile }
