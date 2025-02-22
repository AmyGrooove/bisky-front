import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { IAnimeSectionProps } from '../../types/IAnimeSectionProps'
import { Text } from '@shared/ui/atoms/Text'
import { CalendarIcon, ClockIcon, RadioIcon } from '@shared/icons'
import st from './AnimeHeader.module.scss'
import { cn, getRandomNumber, isNil } from '@shared/utils/functions'
import { BackButton } from './BackButton/BackButton'
import { useAnimeHeader } from './useAnimeHeader'
import { Fancybox } from '@shared/ui/atoms/Fancybox'

const AnimeHeader = (props: IAnimeSectionProps) => {
  const {
    poster,
    screenshots,
    label,
    normalAiredDate,
    normalKind,
    normalRating,
    normalStatus,
    episodeInfo,
    status,
  } = useAnimeHeader(props)

  return (
    <div className={st.root}>
      <Fancybox>
        <a
          href={poster ?? ''}
          target="_blank"
          rel="noopener noreferrer"
          data-fancybox="gallery"
        >
          <PlaceholderImage
            src={poster}
            sizes={[200, 120]}
            className={st.poster}
          />
        </a>
      </Fancybox>
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
