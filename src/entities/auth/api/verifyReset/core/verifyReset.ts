import { ENV } from '@shared/static'

import { IVerifyResetRequest } from '../types/IVerifyResetRequest'

const verifyReset = async (body: IVerifyResetRequest): Promise<true> => {
  const url = new URL(`/auth/verifyReset`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`verifyReset: ${responseData.message}`)

  return responseData
}

export { verifyReset }
