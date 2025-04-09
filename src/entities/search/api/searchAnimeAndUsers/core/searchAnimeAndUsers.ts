import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { ISearchAnimeAndUsersResponse } from '../types/ISearchAnimeAndUsersResponse'

const searchAnimeAndUsers = async (
  searchValue: string,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/search`, ENV.API_URL)
  url.searchParams.append('searchValue', String(searchValue))

  return apiFetchGet<ISearchAnimeAndUsersResponse>(url, options)
}

export { searchAnimeAndUsers }
