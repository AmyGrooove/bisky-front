import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetClubMainInfoResponse } from '../types/IGetClubMainInfoResponse'

const getClubMainInfo = createGetFetcher<IGetClubMainInfoResponse>('/club/{ID}')

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
