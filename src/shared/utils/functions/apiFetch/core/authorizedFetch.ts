import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../../indexAuthDB'
import { isNil } from '../../isNil'

import { refreshToken } from './refreshToken/refreshToken'

const authorizedFetch = async <TResponse>(
  url: URL,
  fetchOptions: RequestInit,
  tokenType: 'access' | 'refresh' = 'access',
): Promise<TResponse> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(fetchOptions.headers as Record<string, string>),
  }

  if (typeof window !== 'undefined') {
    const token = await (tokenType === 'access'
      ? getAccessToken()
      : getRefreshToken())

    if (!isNil(token)) headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
    credentials: 'include',
  })

  if (response.status === 401 && tokenType === 'access') {
    try {
      const refreshResponse = await refreshToken()

      await setAccessToken(refreshResponse.tokens.accessToken)
      await setRefreshToken(refreshResponse.tokens.refreshToken)

      return authorizedFetch<TResponse>(url, fetchOptions, tokenType)
    } catch (error) {
      console.error('Token refresh failed:', error)
    }
  }

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { authorizedFetch }
