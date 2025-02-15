import { API_URL } from '@shared/static'

import { IUpdateEmailRequest } from '../types/IUpdateEmailRequest'

const updateEmail = async (body: IUpdateEmailRequest): Promise<true> => {
  const url = new URL(`/account/updateEmail`, API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`updateEmail: ${response.statusText}`)

  return response.json()
}

export { updateEmail }
