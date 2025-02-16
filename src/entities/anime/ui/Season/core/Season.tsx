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
    variant,
    className,
    animeLink,
    isNextImageShow,
    backgroundImage2,
    isBigVariant,
    firstBackgroundSrc,
    backgroundWidth,
    backgroundHeight,
    genreRow,
  } = useSeason(props)

  return (
    <Link
      href={animeLink}
      className={cn(st.root, className, st[`root_${variant}`])}
    >
      <div className={st.main}>
        <PlaceholderImage
          className={st.poster}
          src={data.poster}
          width={isBigVariant ? 180 : 80}
          height={isBigVariant ? 250 : 120}
        />
        <Text
          weight="700"
          size={isBigVariant ? '32' : '16'}
          className={st.label}
        >
          {data.label}
        </Text>
      </div>
      <ScoreBadge score={data.score} className={st.score} variant={variant} />
      <Text
        className={st.genres}
        size={isBigVariant ? '20' : '12'}
        weight="700"
        maxLines={1}
      >
        {genreRow}
      </Text>
      <span className={st.background} />
      <div
        className={cn(st.backgroundImage, {
          [st.backgroundImage_hide]: isNextImageShow,
        })}
      >
        <PlaceholderImage
          src={firstBackgroundSrc}
          width={backgroundWidth}
          height={backgroundHeight}
        />
      </div>
      <div
        className={cn(st.backgroundImage, {
          [st.backgroundImage_hide]: !isNextImageShow,
        })}
      >
        <PlaceholderImage
          src={data.screenshots?.[backgroundImage2] ?? null}
          width={backgroundWidth}
          height={backgroundHeight}
        />
      </div>
    </Link>
  )
}

export { Season }
