import { IDubClubModel } from '@entities/dubClub/types/IDubClubModel'

interface IGetClubMainInfoResponse
  extends Pick<
    IDubClubModel,
    'name' | 'logo' | 'updatedAt' | 'createdAt' | 'slug' | 'tags'
  > {}

export type { IGetClubMainInfoResponse }
