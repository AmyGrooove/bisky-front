import { IAnimeSectionProps } from '../../../types/IAnimeSectionProps'
import { useAdditionalInfo } from './useAdditionalInfo'
import st from './AdditionalInfo.module.scss'
import { Text } from '@shared/ui/atoms/Text'
import {
  BrushIcon,
  CalendarIcon,
  ClockIcon,
  RadioIcon,
  VenetianMaskIcon,
} from '@shared/icons'
import { ScoreBadge } from '@entities/animeEstimate/ui/ScoreBadge'
import { cn, isNil } from '@shared/utils/functions'
import { DescriptionWrapper } from './DescriptionWrapper/DescriptionWrapper'

const AdditionalInfo = (props: IAnimeSectionProps) => {
  const {
    connectedGenres,
    connectedStudios,
    score,
    scoreText,
    normalKind,
    normalStatus,
    normalAiredDate,
    episodeInfo,
    status,
    description,
  } = useAdditionalInfo(props)

  return (
    <div className={st.root}>
      <div className={st.main}>
        <div className={cn(st.row, st.row_rating)}>
          <ScoreBadge score={score} variant="medium" />
          <Text className={st.scoreCountText}>{scoreText}</Text>
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
      <DescriptionWrapper description={description} />
    </div>
  )
}

export { AdditionalInfo }
