import { IAnimeSectionProps } from '../../../types/IAnimeSectionProps'
import { useListStatus } from './useListStatus'
import st from './ListStatus.module.scss'
import { Text } from '@shared/ui/atoms/Text'
import { CircleViews } from '@entities/animeEstimate/ui/CircleViews'
import { Badge } from '@shared/ui/molecules/Badge'
import { cn, getSpacedNumber } from '@shared/utils/functions'

const ListStatus = (props: IAnimeSectionProps) => {
  const { added, watching, completed, dropped, badgeElements } =
    useListStatus(props)

  return (
    <div className={st.root}>
      <Text weight="700" className={st.label}>
        В списках
      </Text>
      <div className={st.main}>
        <CircleViews
          addedCount={added}
          completeCount={completed}
          droppedCount={dropped}
          watchingCount={watching}
        />
        <div className={cn(st.badgeWrapper, st.badgeWrapper_desktop)}>
          {badgeElements.map(
            ({ estimateCount, estimateText, Icon, status }) => (
              <Badge
                key={estimateText}
                Icon={Icon}
                variant="big"
                className={cn(st.badge, st[`badge_${status}`])}
                isCustomColor
                isCustomTextColor
              >
                {getSpacedNumber(estimateCount)}
              </Badge>
            ),
          )}
        </div>
        <div className={cn(st.badgeWrapper, st.badgeWrapper_mobile)}>
          {badgeElements.map(
            ({ estimateCount, estimateText, Icon, status }) => (
              <Badge
                key={estimateText}
                Icon={Icon}
                iconText={getSpacedNumber(estimateCount)}
                variant="big"
                className={cn(st.badge, st[`badge_${status}`])}
                isCustomColor
                isCustomTextColor
              >
                {estimateText}
              </Badge>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export { ListStatus }
