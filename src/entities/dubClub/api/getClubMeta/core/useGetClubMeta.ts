import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getClubMeta } from './getClubMeta'

const useGetClubMeta = (
  dubClubSlug: string,
  options: TUseQueryOptions<typeof getClubMeta> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['dubClub', dubClubSlug, 'meta'],
    queryFn: ({ signal }) =>
      getClubMeta({
        params: { slug: dubClubSlug },
        optionsGet: { signal },
      }),
  })
}

export { useGetClubMeta }
