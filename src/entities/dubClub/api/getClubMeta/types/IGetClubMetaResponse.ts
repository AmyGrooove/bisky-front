import { IDubClubModel } from '@entities/dubClub/types/IDubClubModel'

interface IGetClubMetaResponse
  extends Pick<IDubClubModel, '_id' | 'logo' | 'slug' | 'name'> {}

export type { IGetClubMetaResponse }
