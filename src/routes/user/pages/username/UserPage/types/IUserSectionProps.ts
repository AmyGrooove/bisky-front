import { getProfile } from '@entities/profile/api/getProfile'
import { TResponse } from '@shared/types'

interface IUserSectionProps {
  data: TResponse<typeof getProfile>
}

export type { IUserSectionProps }
