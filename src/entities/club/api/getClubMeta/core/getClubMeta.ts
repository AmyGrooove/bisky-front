import { createGetFetcher } from '@shared/utils/functions'

import { IGetClubMetaResponse } from '../types/IGetClubMetaResponse'

const getClubMeta = createGetFetcher<IGetClubMetaResponse>('/club/{slug}/meta')

export { getClubMeta }
