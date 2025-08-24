import { createGetFetcher } from '@shared/utils/functions'

import { IGetFriendsStatusResponse } from '../types/IGetFriendsStatusResponse'

const getFriendsStatus = createGetFetcher<IGetFriendsStatusResponse[]>(
  '/anime/{ID}/friendsStatus',
)

export { getFriendsStatus }
