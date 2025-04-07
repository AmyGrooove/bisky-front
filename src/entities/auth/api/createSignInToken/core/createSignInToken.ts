import { ENV } from '@shared/static'

const createSignInToken = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<string> => {
  const url = new URL(`/auth/createSignInToken`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Skip-Auth': String(skipAuth),
    },
    credentials: 'include',
    signal,
  })

  if (!response.ok) {
    const responseData = await response.json()
    throw new Error(`${responseData.message}`)
  }

  const token = await response.text()

  return token
}

export { createSignInToken }
