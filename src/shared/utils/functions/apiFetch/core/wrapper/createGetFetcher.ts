import { ENV } from '@shared/static'

import { IWrapperFetchParams } from '../../types/IWrapperFetchParams'
import { apiFetchGet } from '../base/apiFetchGet'

import { appendQuery } from './appendQuery'
import { interpolatePath } from './interpolatePath'

const createGetFetcher =
  <TResponse>(url: string) =>
  (props: IWrapperFetchParams = {}) => {
    const { params, query, options } = props

    const path = interpolatePath(url, params)
    const convertedUrl = new URL(path, ENV.API_URL)
    appendQuery(convertedUrl, query)

    return apiFetchGet<TResponse>(convertedUrl, options)
  }

export { createGetFetcher }
