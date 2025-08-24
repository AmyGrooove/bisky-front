import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getAnimeMeta } from './getAnimeMeta'

const useGetAnimeMeta = (
  animeSlug: string,
  options: TUseQueryOptions<typeof getAnimeMeta> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', animeSlug, 'meta'],
    queryFn: ({ signal }) =>
      getAnimeMeta({
        params: { slug: animeSlug },
        optionsGet: { signal },
      }),
  })
}

export { useGetAnimeMeta }
