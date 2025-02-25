import { ENV } from '@shared/static'

const setAvatar = async (file: FormData): Promise<true> => {
  const url = new URL(`/account/avatar`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: file,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const result = await response.json()

  if (!response.ok) throw new Error(`setAvatar: ${result.message}`)

  return result
}

export { setAvatar }
