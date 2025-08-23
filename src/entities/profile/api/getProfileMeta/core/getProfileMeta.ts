import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetProfileMetaResponse } from '../types/IGetProfileMetaResponse'

const getProfileMeta = createGetFetcher<IGetProfileMetaResponse>(
  '/profile/{slug}/meta',
)

const useGetProfileMeta = (
  profileSlug: string,
  options: TUseQueryOptions<typeof getProfileMeta> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', profileSlug, 'meta'],
    queryFn: ({ signal }) =>
      getProfileMeta({
        params: { slug: profileSlug },
        options: { signal },
      }),
  })
}

export { useGetProfileMeta }
