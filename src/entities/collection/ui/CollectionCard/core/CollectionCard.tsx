import Link from 'next/link'
import { memo } from 'react'
import { cn, isNil } from '@shared/utils/functions'
import { ScoreBadge } from '@entities/home/ui/ScoreBadge'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { AuthorBadge } from '@entities/profile/ui/AuthorBadge'

import { ICollectionCardProps } from '../types/ICollectionCardProps'

import st from './CollectionCard.module.scss'
import { useCollectionCard } from './useCollectionCard'

const CollectionCard = memo((props: ICollectionCardProps) => {
  const {
    collectionData,
    compactVariant,
    itemsCountText,
    className,
    variant,
    scoreBadge,
  } = useCollectionCard(props)

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      <Link href={`/collections/${collectionData.slug}`} className={st.card}>
        <PlaceholderImage
          className={st.poster}
          src={collectionData.poster}
          sizes={[200, 120]}
          alt={collectionData.name}
        />
        <div className={st.infoWrapper}>
          <Text weight="700" className={st.name}>
            {collectionData.name}
          </Text>
          <Text className={st.itemsCount}>{itemsCountText}</Text>
        </div>
        {!isNil(collectionData.author) && (
          <AuthorBadge
            maxChars={5}
            variant={compactVariant}
            className={st.author}
            userData={collectionData.author}
          />
        )}
        {!isNil(collectionData.score) && (
          <ScoreBadge
            variant={variant}
            className={st.score}
            score={collectionData.score}
          />
        )}
      </Link>
      <div className={st.badges}>
        {!isNil(scoreBadge) && (
          <ScoreBadge variant={compactVariant} score={scoreBadge} />
        )}
      </div>
    </div>
  )
})

CollectionCard.displayName = 'CollectionCard'

export { CollectionCard }
