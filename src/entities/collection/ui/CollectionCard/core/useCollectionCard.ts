import { useMemo } from 'react'

import { getItemsCountText } from '../functions/getItemsCountText'
import { ICollectionCardProps } from '../types/ICollectionCardProps'

const useCollectionCard = (props: ICollectionCardProps) => {
  const {
    collectionData,
    itemsCount,
    className,
    variant = 'big',
    badges,
  } = props
  const scoreBadge = useMemo(
    () => (badges ? (badges.score ?? null) : null),
    [badges?.score],
  )

  const itemsCountText = useMemo(
    () => getItemsCountText(itemsCount),
    [itemsCount],
  )

  const compactVariant: 'medium' | 'small' = useMemo(
    () => (variant === 'big' ? 'medium' : 'small'),
    [variant],
  )

  return {
    collectionData,
    itemsCountText,
    className,
    variant,
    scoreBadge,
    compactVariant,
  }
}

export { useCollectionCard }
