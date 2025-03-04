import { getProfile } from '@entities/profile/api/getProfile'
import { TResponse } from '@shared/types'

interface IFriendsModalProps {
  data: TResponse<typeof getProfile>['friends']
}

export type { IFriendsModalProps }
