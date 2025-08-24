import { createGetFetcher } from '@shared/utils/functions'

import { IGetProfileMetaResponse } from '../types/IGetProfileMetaResponse'

const getProfileMeta = createGetFetcher<IGetProfileMetaResponse>(
  '/profile/{slug}/meta',
)

export { getProfileMeta }
