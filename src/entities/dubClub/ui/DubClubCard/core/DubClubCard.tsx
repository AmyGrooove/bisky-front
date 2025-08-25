import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { cn } from '@shared/utils/functions'
import Link from 'next/link'

import { IDubClubCardProps } from '../types/IDubClubCardProps'

import st from './DubClubCard.module.scss'
import { useDubClubCard } from './useDubClubCard'

const DubClubCard = (props: IDubClubCardProps) => {
  const { dubClubData, className, variant } = useDubClubCard(props)

  return (
    <Link
      href={`/dubClub/${dubClubData.slug}`}
      className={cn(st.root, className, st[`root_${variant}`])}
    >
      <PlaceholderImage
        className={st.logo}
        src={dubClubData.logo}
        sizes={[200, 160]}
      />
      <div className={st.name}>{dubClubData.name}</div>
    </Link>
  )
}

export { DubClubCard }
