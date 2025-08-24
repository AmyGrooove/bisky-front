import { createGetFetcher } from '@shared/utils/functions'

import { IGetCurrentAccountSessionsResponse } from '../types/IGetCurrentAccountSessionsResponse'

const getCurrentAccountSessions =
  createGetFetcher<IGetCurrentAccountSessionsResponse[]>('/auth/session')

export { getCurrentAccountSessions }
