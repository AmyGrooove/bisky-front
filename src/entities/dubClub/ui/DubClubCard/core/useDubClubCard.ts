import { IDubClubCardProps } from '../types/IDubClubCardProps'

const useDubClubCard = (props: IDubClubCardProps) => {
  const { dubClubData, variant = 'big', className } = props

  return { dubClubData, variant, className }
}

export { useDubClubCard }
