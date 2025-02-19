import Link from 'next/link'

import { cn, isNil } from '@shared/utils/functions'
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
    animeHref,
    poster,
    label,
    relation,
    score,
    currentUserScore,
    _id,
  } = useAnimeCard(props)

  return (
    <Link href={animeHref} className={cn(st.root, className)}>
      <PlaceholderImage className={st.poster} src={poster} />
      <div className={st.hoverBackground} />
      <div className={st.hoverLabel}>
        <Text weight="700">{label}</Text>
      </div>
      <AddInListButton _id={_id} className={st.addButton} />

      <Text maxLines={1} weight="700" className={st.label}>
        {label}
      </Text>

      {relation && (
        <Text maxLines={1} isCustomColor className={st.relation}>
          {relation}
        </Text>
      )}
      {!isNil(score) && (
        <>
          <ScoreBadge
            variant="big"
            score={score}
            className={cn(st.scoreBadge, st.scoreBadge_big)}
          />
          <ScoreBadge
            variant="small"
            score={score}
            className={cn(st.scoreBadge, st.scoreBadge_small)}
          />
        </>
      )}
      {!isNil(currentUserScore) && (
        <>
          <ScoreBadge
            variant="big"
            score={currentUserScore}
            className={cn(
              st.currentUserScoreBadge,
              st.currentUserScoreBadge_big,
            )}
          />
          <ScoreBadge
            variant="small"
            score={currentUserScore}
            className={cn(
              st.currentUserScoreBadge,
              st.currentUserScoreBadge_small,
            )}
          />
        </>
      )}
    </Link>
  )
}

export { AnimeCard }
