import {
  RadioIcon,
  ClockIcon,
  CalendarIcon,
  VenetianMaskIcon,
  BrushIcon,
} from '@shared/icons'
import { isNil, cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { ScoreBadge } from '@entities/animeEstimate/ui/ScoreBadge'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'

import { DescriptionWrapper } from '../../DescriptionWrapper'
import { ScreenshotsSliderCarousel } from '../../ScreenshotsSlider'
import { IMiniAnimeInfoModalProps } from '../types/IMiniAnimeInfoModalProps'

import st from './MiniAnimeInfoModal.module.scss'
import { useMiniAnimeInfoModal } from './useMiniAnimeInfoModal'
import { MiniAnimeInfoModalLoading } from './MiniAnimeInfoModalLoading/MiniAnimeInfoModalLoading'

const MiniAnimeInfoModal = (props: IMiniAnimeInfoModalProps) => {
  const {
    connectedGenres,
    connectedStudios,
    score,
    normalKind,
    normalStatus,
    normalAiredDate,
    episodeInfo,
    label,
    description,
    screenshots,
    normalRating,
    status,
    className,
    isModal,
    currentAnimeHref,
    isLoading,
    data,
    animeID,
  } = useMiniAnimeInfoModal(props)

  if (isLoading || (isNil(data) && animeID === ''))
    return <MiniAnimeInfoModalLoading className={cn(st.root, className)} />

  return (
    <div className={cn(st.root, className, { [st.root_modal]: isModal })}>
      <div className={st.info}>
        <Text className={st.label} weight="700">
          {label}
        </Text>
        <div className={st.main}>
          <div className={st.absolute}>
            <ScoreBadge score={score} variant="medium" />
            <div className={st.rating}>
              <Text weight="700" className={st.ratingText} isCustomColor>
                {normalRating}
              </Text>
            </div>
          </div>
          {!isNil(episodeInfo) && (
            <div className={cn(st.row, st.row_mobile)}>
              <RadioIcon className={st.icon} />
              <Text className={st.rowText}>{episodeInfo}</Text>
            </div>
          )}
          <div className={cn(st.row, st.row_mobile)}>
            <ClockIcon className={st.icon} />
            <div className={st.rowTextWrapper}>
              <Text className={st.rowText}>{`${normalKind},`}</Text>
              <Text
                weight="700"
                isCustomColor
                className={cn(st.rowText, st[`rowText_${status}`])}
              >
                {normalStatus}
              </Text>
            </div>
          </div>
          {!isNil(normalAiredDate) && (
            <div className={cn(st.row, st.row_mobile)}>
              <CalendarIcon className={st.icon} />
              <Text className={st.rowText}>{normalAiredDate}</Text>
            </div>
          )}
          {connectedGenres !== '' && (
            <div className={st.row}>
              <VenetianMaskIcon className={st.icon} />
              <Text className={st.rowText}>{connectedGenres}</Text>
            </div>
          )}
          {connectedStudios !== '' && (
            <div className={st.row}>
              <BrushIcon className={st.icon} />
              <Text className={st.rowText}>{connectedStudios}</Text>
            </div>
          )}
        </div>
        <DescriptionWrapper description={description} isAdditionalModal />
      </div>
      {screenshots.length !== 0 && (
        <ScreenshotsSliderCarousel
          screenshots={screenshots}
          isLabelEnabled={false}
          className={st.screenshots}
        />
      )}
      <Link href={currentAnimeHref} className={st.watchNow}>
        <Button onClick={() => {}} variant="big" className={st.watchNow}>
          Смотреть сейчас
        </Button>
      </Link>
    </div>
  )
}

export { MiniAnimeInfoModal }
