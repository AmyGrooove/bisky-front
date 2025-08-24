import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getClubMainInfo } from './getClubMainInfo'

const useGetClubMainInfo = (
  clubID: string,
  options: TUseQueryOptions<typeof getClubMainInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['club', clubID],
    queryFn: ({ signal }) =>
      getClubMainInfo({
        params: { ID: clubID },
        optionsGet: { signal },
      }),
  })
}

export { useGetClubMainInfo }
