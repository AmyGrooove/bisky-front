import { createGetFetcher } from '@shared/utils/functions'

import { IGetCollectionMetaResponse } from '../types/IGetCollectionMetaResponse'

const getCollectionMeta = createGetFetcher<IGetCollectionMetaResponse>(
  '/collection/{slug}/meta',
)

export { getCollectionMeta }
