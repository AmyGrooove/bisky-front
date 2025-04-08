import { getEmptyArray } from '@shared/utils/functions'
import { HistoryItem } from '@entities/history/ui/HistoryItem'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { Text } from '@shared/ui/atoms/Text'
import Image from 'next/image'

import { useHistoryTab } from './useHistoryTab'
import st from './HistoryTab.module.scss'

const HistoryTab = () => {
  const { data, isLoading, loadingRef, isEnd } = useHistoryTab()

  return (
    <div className={st.root}>
      {data.map((historyItem, index) => (
        <HistoryItem key={index} data={historyItem} />
      ))}
      {(!isEnd || isLoading) && (
        <div className={st.historyLoading} ref={loadingRef}>
          {getEmptyArray(4).map((_, index) => (
            <Skeleton key={index} templates="historyItem" />
          ))}
        </div>
      )}
      {data.length === 0 && !(!isEnd || isLoading) && (
        <div className={st.emptyWrapper}>
          <Image
            className={st.image}
            src="/images/biskyAttention.png"
            width={260}
            height={200}
            alt="biskyAttention"
          />
          <Text weight="700" className={st.emptyLabel}>
            История пуста
          </Text>
        </div>
      )}
    </div>
  )
}

export { HistoryTab }
