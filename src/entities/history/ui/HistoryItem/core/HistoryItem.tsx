import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'

import { IHistoryItemProps } from '../types/IHistoryItemProps'

import { useHistoryItem } from './useHistoryItem'
import st from './HistoryItem.module.scss'

const HistoryItem = (props: IHistoryItemProps) => {
  const { className, updateDate, LeftSide, RightIcon } = useHistoryItem(props)

  return (
    <div className={cn(st.root, className)}>
      {LeftSide}
      <Text className={st.updateDate} weight="700">
        {updateDate}
      </Text>
      <div className={st.iconWrapper}>{RightIcon}</div>
    </div>
  )
}

export { HistoryItem }
