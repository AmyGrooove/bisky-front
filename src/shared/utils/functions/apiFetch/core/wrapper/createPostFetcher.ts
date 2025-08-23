import { ENV } from '@shared/static'

import { IWrapperFetchParams } from '../../types/IWrapperFetchParams'
import { apiFetchPost } from '../base/apiFetchPost'
import { TMethodType } from '../../types/TMethodType'

import { appendQuery } from './appendQuery'
import { interpolatePath } from './interpolatePath'

const createPostFetcher =
  (url: string, methodType: TMethodType) =>
  async (props: Omit<IWrapperFetchParams, 'optionsGet'> = {}) => {
    const { params, query, optionsPost } = props

    const path = interpolatePath(url, params)
    const convertedUrl = new URL(path, ENV.API_URL)
    appendQuery(convertedUrl, query)

    await apiFetchPost(convertedUrl, methodType, optionsPost)

    return { params, query }
  }

export { createPostFetcher }
