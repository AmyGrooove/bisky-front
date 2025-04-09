import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetAnimeSitemapResponse } from '../types/IGetAnimeSitemapResponse'

const getAnimeSitemap = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/anime/sitemap`, ENV.API_URL)

  return apiFetchGet<IGetAnimeSitemapResponse[]>(url, options)
}

export { getAnimeSitemap }
