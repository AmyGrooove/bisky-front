import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAllAnimes } from './getAllAnimes'

const useGetAllAnimes = (
  options: TUseQueryOptions<typeof getAllAnimes> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', 'allAnimes'],
    queryFn: ({ signal }) => getAllAnimes({ signal }),
  })
}

export { useGetAllAnimes }
