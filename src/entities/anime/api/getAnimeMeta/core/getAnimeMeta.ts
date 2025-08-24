import { createGetFetcher } from '@shared/utils/functions'

import { IGetAnimeMetaResponse } from '../types/IGetAnimeMetaResponse'

const getAnimeMeta =
  createGetFetcher<IGetAnimeMetaResponse>('/anime/{slug}/meta')

export { getAnimeMeta }
