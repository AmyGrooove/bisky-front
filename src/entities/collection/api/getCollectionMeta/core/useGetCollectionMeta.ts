import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getCollectionMeta } from './getCollectionMeta'

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
