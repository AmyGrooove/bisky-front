import Link from 'next/link'

import { cn } from '@shared/utils/functions'
import { ScoreBadge } from '@entities/animeEstimate/ui/ScoreBadge'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { AddInListButton } from '@entities/animeEstimate/ui/AddInListButton'

import { IAnimeCardProps } from '../types/IAnimeCardProps'

import st from './AnimeCard.module.scss'
import { useAnimeCard } from './useAnimeCard'

const AnimeCard = (props: IAnimeCardProps) => {
  const {
    className,
    variant,
    animeHref,
    isBigVariant,
    poster,
    label,
    relation,
    score,
    currentUserScore,
    _id,
  } = useAnimeCard(props)

  return (
    <Link
      href={animeHref}
      className={cn(st.root, className, st[`root_${variant}`])}
    >
      <PlaceholderImage
        className={st.poster}
        src={poster}
        width={isBigVariant ? 200 : 120}
        height={isBigVariant ? 320 : 190}
      />
      {isBigVariant && (
        <>
          <div className={st.hoverBackground} />
          <div className={st.hoverLabel}>
            <Text size="16" weight="700">
              {label}
            </Text>
          </div>
          <AddInListButton _id={_id} className={st.addButton} />
        </>
      )}

      {!isBigVariant && (
        <>
          <Text maxLines={1} size="12" weight="700">
            {label}
          </Text>
        </>
      )}

      {relation && (
        <Text
          maxLines={1}
          size={isBigVariant ? '16' : '12'}
          isCustomColor
          className={st.relation}
        >
          {relation}
        </Text>
      )}
      {score && (
        <ScoreBadge variant={variant} score={score} className={st.scoreBadge} />
      )}
      {currentUserScore && (
        <ScoreBadge
          variant={variant}
          score={currentUserScore}
          className={st.currentUserScoreBadge}
        />
      )}
    </Link>
  )
}

export { AnimeCard }
