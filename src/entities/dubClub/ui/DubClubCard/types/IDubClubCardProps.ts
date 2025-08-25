import { IDubClubModel } from '@entities/dubClub/types/IDubClubModel'

interface IDubClubCardProps {
  dubClubData: Pick<IDubClubModel, 'slug' | 'name' | 'logo'>
  itemsCount: number

  className?: string
  variant?: 'big' | 'small'
}

export type { IDubClubCardProps }
