import { ENV } from '@shared/static'

const logout = async (): Promise<true> => {
  const url = new URL(`/auth/logout`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { logout }
