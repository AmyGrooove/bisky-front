import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAdditionalProfileInfoResponse } from '../types/IGetAdditionalProfileInfoResponse'

const getAdditionalProfileInfo =
  createGetFetcher<IGetAdditionalProfileInfoResponse>(
    '/profile/{ID}/additional',
  )

const useGetAdditionalProfileInfo = (
  profileID: string,
  options: TUseQueryOptions<typeof getAdditionalProfileInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', profileID, 'additional'],
    queryFn: ({ signal }) =>
      getAdditionalProfileInfo({
        params: { ID: profileID },
        options: { signal },
      }),
  })
}

export { useGetAdditionalProfileInfo }
