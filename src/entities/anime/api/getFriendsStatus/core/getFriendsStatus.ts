import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetFriendsStatusResponse } from '../types/IGetFriendsStatusResponse'

const getFriendsStatus = createGetFetcher<IGetFriendsStatusResponse[]>(
  '/anime/{ID}/friendsStatus',
)

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
