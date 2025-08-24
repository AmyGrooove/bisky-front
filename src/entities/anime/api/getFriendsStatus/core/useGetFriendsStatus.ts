import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetFriendsStatusResponse } from '../types/IGetFriendsStatusResponse'

import { getFriendsStatus } from './getFriendsStatus'

const useGetFriendsStatus = (
  animeID: string,
  options: TUseQueryOptions<typeof getFriendsStatus> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', animeID, 'friendsStatus'],
    queryFn: ({ signal }) =>
      getFriendsStatus({
        params: { ID: animeID },
        optionsGet: { signal },
      }),
  })
}

export { useGetFriendsStatus }
