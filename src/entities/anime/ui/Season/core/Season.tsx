'use client'

import Link from 'next/link'
import { cn } from '@shared/utils/functions'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { ScoreBadge } from '@entities/home/ui/ScoreBadge'

import { ISeasonProps } from '../types/ISeasonProps'

import { useSeason } from './useSeason'
import st from './Season.module.scss'

const Season = (props: ISeasonProps) => {
  const {
    data,
    className,
    animeLink,
    currentImageIndex,
    currentScreenshots,
    genreRow,
    variant,
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
          sizes={[180, 80]}
        />
        <Text weight="700" className={st.label}>
          {data.name}
        </Text>
      </div>
      <Text className={st.genres} weight="700" maxLines={1}>
        {genreRow}
      </Text>
      {currentScreenshots.map((screenshot, index) => (
        <div
          key={screenshot}
          className={cn(st.backWrapper, {
            [st.backWrapper_hide]: index !== currentImageIndex,
          })}
        >
          <PlaceholderImage
            src={screenshot}
            className={st.backImage}
            sizes={[1080, 380]}
          />
        </div>
      ))}
      <ScoreBadge score={data.score} className={st.score} variant={variant} />
    </Link>
  )
}

export { Season }
