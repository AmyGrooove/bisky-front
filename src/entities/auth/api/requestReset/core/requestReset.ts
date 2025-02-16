import { API_URL } from '@shared/static'

import { IRequestResetRequest } from '../types/IRequestResetRequest'

const requestReset = async (body: IRequestResetRequest): Promise<true> => {
  const url = new URL(`/auth/requestReset`, API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`requestReset: ${response.statusText}`)

  return response.json()
}

export { requestReset }
