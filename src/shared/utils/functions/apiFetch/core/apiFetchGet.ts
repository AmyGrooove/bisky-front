import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../../indexAuthDB'
import { isNil } from '../../isNil'
import { IApiFetchGetOptions } from '../types/IApiFetchGetOptions'

import { refreshToken } from './refreshToken/refreshToken'

const apiFetchGet = async <TResponse>(
  url: URL,
  options: IApiFetchGetOptions = {},
): Promise<TResponse> => {
  const { signal, tokenType = 'access' } = options

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (typeof window !== 'undefined') {
    const token = await (tokenType === 'access'
      ? getAccessToken()
      : getRefreshToken())

    if (!isNil(token)) {
      headers['Authorization'] = `Bearer ${token}`
    }
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    credentials: 'include',
    signal,
  })

  if (response.status === 401 && tokenType === 'access') {
    try {
      const refreshResponse = await refreshToken()

      await setAccessToken(refreshResponse.tokens.accessToken)
      await setRefreshToken(refreshResponse.tokens.refreshToken)

      return apiFetchGet<TResponse>(url, options)
    } catch (_) {
      /* empty */
    }
  }

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { apiFetchGet }
