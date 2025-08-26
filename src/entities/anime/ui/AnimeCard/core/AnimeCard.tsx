import Link from 'next/link'
import { cn, isNil } from '@shared/utils/functions'
import { ScoreBadge } from '@entities/home/ui/ScoreBadge'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { HistoryIcon } from '@shared/icons'
import { Badge } from '@shared/ui/molecules/Badge'

import { IAnimeCardProps } from '../types/IAnimeCardProps'

import st from './AnimeCard.module.scss'
import { useAnimeCard } from './useAnimeCard'
import { UpdateEstimateButton } from './UpdateEstimateButton'

const AnimeCard = (props: IAnimeCardProps) => {
  const {
    animeData,
    className,
    variant,
    scoreBadge,
    reWatchedCountBadge,
    relationBadge,
    currentUserAnimeStatus,
    statusBadgeText,
    isBigVariant,
    badgeVariant,
  } = useAnimeCard(props)

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      <Link href={`/anime/${animeData.slug}`} className={st.card}>
        <PlaceholderImage
          className={st.poster}
          src={animeData.poster}
          sizes={[200, 120]}
        />
        <ScoreBadge
          variant={variant}
          className={st.score}
          score={animeData.score}
        />
        {isBigVariant && (
          <>
            <div className={st.background} />
            <Text weight="700" className={st.bigName}>
              {animeData.name}
            </Text>
            <UpdateEstimateButton
              className={st.addButton}
              currentUserAnimeStatus={currentUserAnimeStatus}
              animeID={animeData._id}
            />
          </>
        )}
      </Link>
      {!isBigVariant && (
        <div className={st.nameWrapper}>
          <Text maxLines={2} weight="700" className={st.smallName}>
            {animeData.name}
          </Text>
          <UpdateEstimateButton
            currentUserAnimeStatus={currentUserAnimeStatus}
            animeID={animeData._id}
            isEllipsisIcon
          />
        </div>
      )}
      <div className={st.badges}>
        {!isNil(animeData.status) && (
          <Badge
            className={cn(
              st.statusBadge,
              st[`statusBadge_${animeData.status}`],
            )}
            variant={badgeVariant}
          >
            {statusBadgeText}
          </Badge>
        )}
        {!isNil(scoreBadge) && (
          <ScoreBadge variant={badgeVariant} score={scoreBadge} />
        )}
        {!isNil(reWatchedCountBadge) && (
          <Badge
            variant={badgeVariant}
            className={st.reWatchedCountBadge}
            Icon={HistoryIcon}
          >
            {reWatchedCountBadge}
          </Badge>
        )}
        {!isNil(relationBadge) && (
          <Badge variant={badgeVariant} className={st.relationBadge}>
            {relationBadge}
          </Badge>
        )}
      </div>
    </div>
  )
}

export { AnimeCard }
