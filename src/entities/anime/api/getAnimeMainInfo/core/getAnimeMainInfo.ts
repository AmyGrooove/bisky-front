import { createGetFetcher } from '@shared/utils/functions'

import { IGetAnimeMainInfoResponse } from '../types/IGetAnimeMainInfoResponse'

const getAnimeMainInfo =
  createGetFetcher<IGetAnimeMainInfoResponse>('/anime/{ID}')

export { getAnimeMainInfo }
