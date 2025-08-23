import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeMetaResponse } from '../types/IGetAnimeMetaResponse'

const getAnimeMeta =
  createGetFetcher<IGetAnimeMetaResponse>('/anime/{slug}/meta')

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
        options: { signal },
      }),
  })
}

export { useGetAnimeMeta }
