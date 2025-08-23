import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetClubMetaResponse } from '../types/IGetClubMetaResponse'

const getClubMeta = createGetFetcher<IGetClubMetaResponse>('/club/{slug}/meta')

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
