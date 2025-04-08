import { Text } from '@shared/ui/atoms/Text'
import { CircleViews } from '@entities/animeEstimate/ui/CircleViews'
import { Badge } from '@shared/ui/molecules/Badge'
import { cn, getSpacedNumber } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

import st from './ListSection.module.scss'
import { useListSection } from './useListSection'

const ListSection = () => {
  const { added, watching, completed, dropped, badgeElements, isLoading } =
    useListSection()

  if (isLoading) return <Skeleton className={st.loading} />

  return (
    <div className={st.root}>
      <Text weight="700" className={st.label}>
        Список аниме
      </Text>
      <div className={st.main}>
        <CircleViews
          addedCount={added}
          completeCount={completed}
          droppedCount={dropped}
          watchingCount={watching}
        />
        <div className={cn(st.badgeWrapper)}>
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
      </div>
    </div>
  )
}

export { ListSection }
