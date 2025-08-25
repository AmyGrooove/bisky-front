import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getClubMainInfo } from './getClubMainInfo'

const useGetClubMainInfo = (
  dubClubID: string,
  options: TUseQueryOptions<typeof getClubMainInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['dubClub', dubClubID],
    queryFn: ({ signal }) =>
      getClubMainInfo({
        params: { ID: dubClubID },
        optionsGet: { signal },
      }),
  })
}

export { useGetClubMainInfo }
