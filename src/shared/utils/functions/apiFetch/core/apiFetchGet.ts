import { IApiFetchGetOptions } from '../types/IApiFetchGetOptions'

const apiFetchGet = async <TResponse>(
  url: URL,
  options?: IApiFetchGetOptions,
): Promise<TResponse> => {
  const { signal } = options ?? {}

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    credentials: 'include',
    signal,
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { apiFetchGet }
