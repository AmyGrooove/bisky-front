import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetStudioSitemapResponse } from '../types/IGetStudioSitemapResponse'

const getStudioSitemap = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/studio/sitemap`, ENV.API_URL)

  return apiFetchGet<IGetStudioSitemapResponse[]>(url, options)
}

export { getStudioSitemap }
