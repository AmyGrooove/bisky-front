import { ISessionModel } from '@entities/account/types/ISessionModel'

interface IGetCurrentAccountSessionsResponse
  extends Pick<
    ISessionModel,
    'refreshToken' | 'deviceType' | 'loggedAt' | 'location'
  > {}

export type { IGetCurrentAccountSessionsResponse }
