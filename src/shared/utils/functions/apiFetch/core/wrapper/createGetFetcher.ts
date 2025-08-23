import { ENV } from '@shared/static'

import { IWrapperFetchParams } from '../../types/IWrapperFetchParams'
import { apiFetchGet } from '../base/apiFetchGet'

import { appendQuery } from './appendQuery'
import { interpolatePath } from './interpolatePath'

const createGetFetcher =
  <TResponse>(url: string) =>
  (props: Omit<IWrapperFetchParams, 'optionsPost'> = {}) => {
    const { params, query, optionsGet } = props

    const path = interpolatePath(url, params)
    const convertedUrl = new URL(path, ENV.API_URL)
    appendQuery(convertedUrl, query)

    return apiFetchGet<TResponse>(convertedUrl, optionsGet)
  }

export { createGetFetcher }
