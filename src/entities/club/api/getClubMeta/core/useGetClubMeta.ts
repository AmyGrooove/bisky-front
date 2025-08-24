import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getClubMeta } from './getClubMeta'

const useGetClubMeta = (
  clubSlug: string,
  options: TUseQueryOptions<typeof getClubMeta> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['club', clubSlug, 'meta'],
    queryFn: ({ signal }) =>
      getClubMeta({
        params: { slug: clubSlug },
        optionsGet: { signal },
      }),
  })
}

export { useGetClubMeta }
