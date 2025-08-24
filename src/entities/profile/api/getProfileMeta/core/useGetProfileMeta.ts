import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetProfileMetaResponse } from '../types/IGetProfileMetaResponse'

import { getProfileMeta } from './getProfileMeta'

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
        optionsGet: { signal },
      }),
  })
}

export { useGetProfileMeta }
