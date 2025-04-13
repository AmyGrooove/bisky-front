import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimesFastFind } from './getAnimesFastFind'

const useGetAnimesFastFind = (
  options: TUseQueryOptions<typeof getAnimesFastFind> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', 'fastFind'],
    queryFn: ({ signal }) => getAnimesFastFind({ signal }),
  })
}

export { useGetAnimesFastFind }
