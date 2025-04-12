import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetFranchiseSitemapResponse } from '../types/IGetFranchiseSitemapResponse'

const getFranchiseSitemap = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/franchise/sitemap`, ENV.API_URL)

  return apiFetchGet<IGetFranchiseSitemapResponse[]>(url, options)
}

export { getFranchiseSitemap }
