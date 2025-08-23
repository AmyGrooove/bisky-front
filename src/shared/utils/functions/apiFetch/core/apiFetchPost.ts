import { IApiFetchPostOptions } from '../types/IApiFetchPostOptions'

import { authorizedFetch } from './authorizedFetch'

const apiFetchPost = async <TResponse = true>(
  url: URL,
  methodType: 'POST' | 'PATCH' | 'PUT' | 'DELETE',
  options: IApiFetchPostOptions = {},
): Promise<TResponse> => {
  const { body, tokenType = 'access' } = options

  return authorizedFetch<TResponse>(
    url,
    { method: methodType, body: JSON.stringify(body) },
    tokenType,
  )
}

export { apiFetchPost }
