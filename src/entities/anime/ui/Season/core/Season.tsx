import Link from 'next/link'
import { cn } from '@shared/utils/functions'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { ScoreBadge } from '@entities/animeEstimate/ui/ScoreBadge'

import { ISeasonProps } from '../types/ISeasonProps'

import { useSeason } from './useSeason'
import st from './Season.module.scss'

const Season = (props: ISeasonProps) => {
  const {
    data,
    className,
    animeLink,
    currentImageID,
    currentScreenshots,
    genreRow,
    isNotActive,
  } = useSeason(props)

  return (
    <Link
      href={animeLink}
      className={cn(st.root, className, {
        [st.root_notActive]: isNotActive,
      })}
    >
      <div className={st.main}>
        <PlaceholderImage
          className={st.poster}
          src={data.poster}
          sizes={[180, 80]}
        />
        <Text weight="700" className={st.label}>
          {data.label}
        </Text>
      </div>
      <Text className={st.genres} weight="700" maxLines={1}>
        {genreRow}
      </Text>
      <span className={st.background} />
      {currentScreenshots.map((screenshot, index) => (
        <div
          key={screenshot}
          className={cn(st.backWrapper, {
            [st.backWrapper_hide]: index !== currentImageID,
          })}
        >
          <PlaceholderImage
            src={screenshot}
            className={st.backImage}
            sizes={[1080, 380]}
          />
        </div>
      ))}
      <ScoreBadge
        score={data.score}
        className={cn(st.score, st.score_big)}
        variant="big"
      />
      <ScoreBadge
        score={data.score}
        className={cn(st.score, st.score_small)}
        variant="small"
      />
    </Link>
  )
}

export { Season }
