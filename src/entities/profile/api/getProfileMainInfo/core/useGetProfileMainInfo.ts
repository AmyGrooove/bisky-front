import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetProfileMainInfoResponse } from '../types/IGetProfileMainInfoResponse'

import { getProfileMainInfo } from './getProfileMainInfo'

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
