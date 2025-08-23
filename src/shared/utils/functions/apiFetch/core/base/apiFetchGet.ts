import { IApiFetchGetOptions } from '../../types/IApiFetchGetOptions'

import { authorizedFetch } from './authorizedFetch'

const apiFetchGet = async <TResponse>(
  url: URL,
  options: IApiFetchGetOptions = {},
): Promise<TResponse> => {
  const { signal, tokenType = 'accessToken' } = options

  return authorizedFetch<TResponse>(url, { method: 'GET', signal }, tokenType)
}

export { apiFetchGet }
