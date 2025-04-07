import { ENV } from '@shared/static'

const createTemporaryProfile = async (): Promise<string> => {
  const url = new URL(`/auth/createTemporaryProfile`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) {
    const responseData = await response.json()
    throw new Error(`${responseData.message}`)
  }

  const token = await response.text()

  return token
}

export { createTemporaryProfile }
