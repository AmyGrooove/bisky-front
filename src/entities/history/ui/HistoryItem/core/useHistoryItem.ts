import { normalizeDate } from '@shared/utils/functions'

import { IHistoryItemProps } from '../types/IHistoryItemProps'

import { HistoryType } from './HistoryType/HistoryType'
import { HistoryTypeIcon } from './HistoryTypeIcon/HistoryTypeIcon'

const useHistoryItem = (props: IHistoryItemProps) => {
  const {
    data: { updatedOn, historyData, type },
    className,
    variant = 'big',
  } = props

  const updateDate = normalizeDate(updatedOn)

  const LeftSide = HistoryType(type, historyData, variant)
  const RightIcon = HistoryTypeIcon(type, historyData)

  return { className, updateDate, LeftSide, RightIcon }
}

export { useHistoryItem }
