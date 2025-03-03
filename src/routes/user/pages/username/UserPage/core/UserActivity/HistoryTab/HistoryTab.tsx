import { getEmptyArray } from '@shared/utils/functions'
import st from './HistoryTab.module.scss'
import { useHistoryTab } from './useHistoryTab'
import { HistoryItem } from '@entities/history/ui/HistoryItem'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

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
    </div>
  )
}

export { HistoryTab }
