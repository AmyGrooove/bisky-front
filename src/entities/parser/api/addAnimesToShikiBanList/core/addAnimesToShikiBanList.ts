import { ENV } from '@shared/static'

import { IAddAnimesToShikiBanListRequest } from '../types/IAddAnimesToShikiBanListRequest'

const addAnimesToShikiBanList = async (
  body: IAddAnimesToShikiBanListRequest,
): Promise<true> => {
  const url = new URL(`/parse/addAnimesToShikiBanList`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=anime&tag=fast`)

  const result = await response.json()

  if (!response.ok) {
    throw new Error(`addAnimesToShikiBanList: ${result.message}`)
  }

  return result
}

export { addAnimesToShikiBanList }
