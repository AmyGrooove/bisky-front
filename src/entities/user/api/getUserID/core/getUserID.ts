import { API_URL } from '@shared/static'

const getUserID = async (): Promise<string> => {
  const url = new URL('/account/getUserID', API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`getUserID: ${response.statusText}`)

  return response.json()
}

export { getUserID }
