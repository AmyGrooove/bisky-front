import { createGetFetcher } from '@shared/utils/functions'

import { IGetAnimeAdditionalInfoResponse } from '../types/IGetAnimeAdditionalInfoResponse'

const getAnimeAdditionalInfo =
  createGetFetcher<IGetAnimeAdditionalInfoResponse>('/anime/{ID}/additional')

export { getAnimeAdditionalInfo }
