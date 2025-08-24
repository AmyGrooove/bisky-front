import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetAdditionalProfileInfoResponse } from '../types/IGetAdditionalProfileInfoResponse'

import { getAdditionalProfileInfo } from './getAdditionalProfileInfo'

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
        optionsGet: { signal },
      }),
  })
}

export { useGetAdditionalProfileInfo }
