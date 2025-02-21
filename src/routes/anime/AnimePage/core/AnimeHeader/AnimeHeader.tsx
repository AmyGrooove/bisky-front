import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { IAnimeSectionProps } from '../../types/IAnimeSectionProps'
import { Text } from '@shared/ui/atoms/Text'
import { CalendarIcon, ClockIcon, RadioIcon } from '@shared/icons'
import st from './AnimeHeader.module.scss'
import {
  getNormalEpisodeInfo,
  getNormalKind,
  getNormalRating,
  getNormalStatus,
  getSeasonYear,
} from '@entities/anime/utils/functions'
import { cn, getRandomNumber, isNil } from '@shared/utils/functions'
import { BackButton } from './BackButton/BackButton'

const AnimeHeader = (props: IAnimeSectionProps) => {
  const {
    data: {
      labels,
      poster,
      screenshots,
      rating,
      episodes,
      kind,
      status,
      dates,
    },
  } = props

  const label = labels.ru ?? labels.en ?? ''

  const normalRating = getNormalRating(rating)
  const normalKind = getNormalKind(kind)
  const normalStatus = getNormalStatus(status)
  const normalAiredDate = getSeasonYear(dates.airedOn, status === 'anons')

  const episodeInfo = getNormalEpisodeInfo(
    episodes.airedCount,
    episodes.averageDuration,
  )

  return (
    <div className={st.root}>
      <PlaceholderImage src={poster} sizes={[200, 120]} className={st.poster} />
      <div className={st.main}>
        <div className={st.labelWrapper}>
          <Text weight="700" className={st.label}>
            {label}
          </Text>
          <div className={st.rating}>
            <Text weight="700" className={st.ratingText} isCustomColor>
              {normalRating}
            </Text>
          </div>
        </div>
        <div className={st.additionalInfo}>
          {!isNil(episodeInfo) && (
            <div className={st.infoRow}>
              <RadioIcon className={st.infoIcon} />
              <Text className={st.infoText}>{episodeInfo}</Text>
            </div>
          )}
          <div className={st.infoRow}>
            <ClockIcon className={st.infoIcon} />
            <div className={st.infoTextWrapper}>
              <Text className={st.infoText}>{`${normalKind},`}</Text>
              <Text
                weight="700"
                isCustomColor
                className={cn(st.infoText, st[`infoText_${status}`])}
              >
                {normalStatus}
              </Text>
            </div>
          </div>
          {!isNil(normalAiredDate) && (
            <div className={st.infoRow}>
              <CalendarIcon className={st.infoIcon} />
              <Text className={st.infoText}>{normalAiredDate}</Text>
            </div>
          )}
        </div>
      </div>
      <BackButton />
      <PlaceholderImage
        src={screenshots[getRandomNumber(0, 5)]}
        sizes={[1400, 400]}
        className={st.background}
      />
    </div>
  )
}

export { AnimeHeader }
