import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetCollectionMetaResponse } from '../types/IGetCollectionMetaResponse'

const getCollectionMeta = createGetFetcher<IGetCollectionMetaResponse>(
  '/collection/{slug}/meta',
)

const useGetCollectionMeta = (
  collectionSlug: string,
  options: TUseQueryOptions<typeof getCollectionMeta> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['collection', collectionSlug, 'meta'],
    queryFn: ({ signal }) =>
      getCollectionMeta({
        params: { slug: collectionSlug },
        optionsGet: { signal },
      }),
  })
}

export { useGetCollectionMeta }
