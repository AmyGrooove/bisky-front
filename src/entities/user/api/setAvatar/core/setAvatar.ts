import { API_URL } from '@shared/static'

const setAvatar = async (file: FormData): Promise<true> => {
  const url = new URL(`/account/avatar`, API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: file,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`setAvatar: ${response.statusText}`)

  return response.json()
}

export { setAvatar }
