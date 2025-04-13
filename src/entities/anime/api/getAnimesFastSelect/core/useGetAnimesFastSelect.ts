import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimesFastSelect } from './getAnimesFastSelect'

const useGetAnimesFastSelect = (
  options: TUseQueryOptions<typeof getAnimesFastSelect> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', 'fastSelect'],
    queryFn: ({ signal }) => getAnimesFastSelect({ signal }),
  })
}

export { useGetAnimesFastSelect }
