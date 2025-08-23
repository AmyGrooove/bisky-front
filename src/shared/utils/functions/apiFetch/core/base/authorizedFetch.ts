import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  TTokenKey,
} from '@shared/utils/functions/indexAuthDB'
import { isNil } from '@shared/utils/functions/isNil'

import { refreshToken } from '../refreshToken/refreshToken'
import { IErrorMessage } from '../../types/IErrorMessage'

const authorizedFetch = async <TResponse>(
  url: URL,
  fetchOptions: RequestInit,
  tokenType: TTokenKey = 'accessToken',
) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(fetchOptions.headers as Record<string, string>),
  }

  if (typeof window !== 'undefined') {
    const token = await (tokenType === 'accessToken'
      ? getAccessToken()
      : getRefreshToken())

    if (!isNil(token)) headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
    credentials: 'include',
  })

  if (response.status === 401 && tokenType === 'accessToken') {
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

  if (!response.ok) {
    const { statusCode, error, message } = responseData as IErrorMessage
    const messages = !isNil(message) ? message : ['Неизвестная ошибка']

    throw new Error(
      `[${statusCode ?? response.status}] ${error ?? ''}: ${messages.join(', ')}`,
    )
  }

  return responseData as TResponse
}

export { authorizedFetch }
