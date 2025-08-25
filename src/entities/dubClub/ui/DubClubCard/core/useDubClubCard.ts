import { IDubClubCardProps } from '../types/IDubClubCardProps'

const useDubClubCard = (props: IDubClubCardProps) => {
  const { dubClubData, variant = 'big', className, itemsCount } = props

  return { dubClubData, variant, className, itemsCount }
}

export { useDubClubCard }
