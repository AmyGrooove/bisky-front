import { ENV } from '@shared/static'

import { IRequestResetRequest } from '../types/IRequestResetRequest'

const requestReset = async (body: IRequestResetRequest): Promise<true> => {
  const url = new URL(`/auth/requestReset`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { requestReset }
