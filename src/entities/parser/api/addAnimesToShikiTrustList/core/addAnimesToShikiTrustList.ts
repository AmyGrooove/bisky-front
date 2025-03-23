import { ENV } from '@shared/static'

import { IAddAnimesToShikiTrustListRequest } from '../types/IAddAnimesToShikiTrustListRequest'

const addAnimesToShikiTrustList = async (
  body: IAddAnimesToShikiTrustListRequest,
): Promise<true> => {
  const url = new URL(`/parse/addAnimesToShikiTrustList`, ENV.API_URL)

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

export { addAnimesToShikiTrustList }
