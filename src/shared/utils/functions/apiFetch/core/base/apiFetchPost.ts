import { IApiFetchPostOptions } from '../../types/IApiFetchPostOptions'
import { TMethodType } from '../../types/TMethodType'

import { authorizedFetch } from './authorizedFetch'

const apiFetchPost = async <TResponse = true>(
  url: URL,
  methodType: TMethodType,
  options: IApiFetchPostOptions = {},
): Promise<TResponse> => {
  const {
    body,
    file,
    tokenType = 'accessToken',
    isEmptyContentType = false,
  } = options

  return authorizedFetch<TResponse>(
    url,
    { method: methodType, body: file ?? JSON.stringify(body) },
    tokenType,
    isEmptyContentType,
  )
}

export { apiFetchPost }
