import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetGenreSitemapResponse } from '../types/IGetGenreSitemapResponse'

const getGenreSitemap = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/genre/sitemap`, ENV.API_URL)

  return apiFetchGet<IGetGenreSitemapResponse[]>(url, options)
}

export { getGenreSitemap }
