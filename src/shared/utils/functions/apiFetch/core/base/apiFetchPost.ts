import { IApiFetchPostOptions } from '../../types/IApiFetchPostOptions'
import { TMethodType } from '../../types/TMethodType'

import { authorizedFetch } from './authorizedFetch'

const apiFetchPost = async <TResponse = true>(
  url: URL,
  methodType: TMethodType,
  options: IApiFetchPostOptions = {},
): Promise<TResponse> => {
  const { body, tokenType = 'accessToken' } = options

  return authorizedFetch<TResponse>(
    url,
    { method: methodType, body: JSON.stringify(body) },
    tokenType,
  )
}

export { apiFetchPost }
