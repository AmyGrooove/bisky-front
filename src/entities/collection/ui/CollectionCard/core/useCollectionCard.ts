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
  const { score: scoreBadge = null } = badges ?? {}

  const itemsCountText = getItemsCountText(itemsCount)

  return {
    collectionData,
    itemsCountText,
    className,
    variant,
    scoreBadge,
  }
}

export { useCollectionCard }
