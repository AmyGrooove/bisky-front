import { ENV } from '@shared/static'

const setAvatar = async (file: FormData): Promise<true> => {
  const url = new URL(`/account/avatar`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: file,
    headers: { Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { setAvatar }
