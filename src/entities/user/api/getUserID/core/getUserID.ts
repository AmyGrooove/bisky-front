import { ENV } from '@shared/static'

const getUserID = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<string> => {
  const url = new URL('/account/getUserID', ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Skip-Auth': String(skipAuth),
    },
    credentials: 'include',
    signal,
  })

  if (!response.ok) throw new Error(`getUserID: ${response.statusText}`)

  return response.json()
}

export { getUserID }
