import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetProfileMainInfoResponse } from '../types/IGetProfileMainInfoResponse'

const getProfileMainInfo =
  createGetFetcher<IGetProfileMainInfoResponse>('/profile/{ID}')

const useGetProfileMainInfo = (
  profileID: string,
  options: TUseQueryOptions<typeof getProfileMainInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', profileID],
    queryFn: ({ signal }) =>
      getProfileMainInfo({
        params: { ID: profileID },
        optionsGet: { signal },
      }),
  })
}

export { useGetProfileMainInfo }
