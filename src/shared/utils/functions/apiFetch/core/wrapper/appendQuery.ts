import { isNil } from '@shared/utils/functions/isNil'

import { IWrapperFetchParams } from '../../types/IWrapperFetchParams'

const appendQuery = (url: URL, query?: IWrapperFetchParams['query']) => {
  if (isNil(query)) return url

  for (const [key, value] of Object.entries(query)) {
    const list = Array.isArray(value) ? value : [value]

    list.forEach((item) => {
      url.searchParams.append(key, String(item))
    })
  }

  return url
}

export { appendQuery }
