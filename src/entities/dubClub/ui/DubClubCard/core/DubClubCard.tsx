import { memo } from 'react'
import Link from 'next/link'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { cn } from '@shared/utils/functions'

import { IDubClubCardProps } from '../types/IDubClubCardProps'

import st from './DubClubCard.module.scss'
import { useDubClubCard } from './useDubClubCard'

const DubClubCard = memo((props: IDubClubCardProps) => {
  const { dubClubData, className, variant, itemsCount } = useDubClubCard(props)

  return (
    <Link
      href={`/dubClub/${dubClubData.slug}`}
      className={cn(st.root, className, st[`root_${variant}`])}
    >
      <PlaceholderImage
        className={st.logo}
        src={dubClubData.logo}
        sizes={[200, 160]}
        alt={dubClubData.name}
      />
      <div className={st.itemsCount}>{itemsCount}</div>
    </Link>
  )
})

DubClubCard.displayName = 'DubClubCard'

export { DubClubCard }
