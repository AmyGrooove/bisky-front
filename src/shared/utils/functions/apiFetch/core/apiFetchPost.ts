import { getAccessToken, getRefreshToken } from '../../indexAuthDB'
import { IApiFetchPostOptions } from '../types/IApiFetchPostOptions'

const apiFetchPost = async <TResponse = true>(
  url: URL,
  methodType: 'POST' | 'PATCH' | 'PUT' | 'DELETE',
  options: IApiFetchPostOptions = {},
): Promise<TResponse> => {
  const { body, tokenType = 'access' } = options

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (typeof window !== 'undefined') {
    const token = await (tokenType === 'access'
      ? getAccessToken()
      : getRefreshToken())

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
  }

  const response = await fetch(url, {
    method: methodType,
    headers,
    credentials: 'include',
    body: JSON.stringify(body),
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { apiFetchPost }
