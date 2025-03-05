import { useListSection } from './useListSection'
import st from './ListSection.module.scss'
import { Text } from '@shared/ui/atoms/Text'
import { CircleViews } from '@entities/animeEstimate/ui/CircleViews'
import { Badge } from '@shared/ui/molecules/Badge'
import { cn, getSpacedNumber } from '@shared/utils/functions'
import { CassetteTapeIcon } from '@shared/icons'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

const ListSection = () => {
  const {
    added,
    watching,
    completed,
    dropped,
    badgeElements,
    isCurrentUser,
    userListLink,
    isLoading,
  } = useListSection()

  if (isLoading) return <Skeleton className={st.loading} />

  return (
    <div className={st.root}>
      <Link href={userListLink} className={st.button}>
        <Text weight="700" className={st.label}>
          Список аниме
        </Text>
      </Link>
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
      {!isCurrentUser && (
        <Link href={userListLink} className={st.button}>
          <Button
            Icon={CassetteTapeIcon}
            variant="big"
            onClick={() => {}}
            className={st.button}
          >
            Просмотреть список
          </Button>
        </Link>
      )}
    </div>
  )
}

export { ListSection }
