import { getListStatusIcon } from '@entities/animeEstimate/utils'

import { IChangingStatusProps } from '../../types/IChangingStatusProps'

const useChangingStatus = (props: IChangingStatusProps) => {
  const {
    selectedStatus = null,
    posterHref = null,
    animeData = null,
    selectedPreviousStatus = null,
  } = props

  const ListIcon = getListStatusIcon(selectedStatus)

  return {
    selectedStatus,
    posterHref,
    ListIcon,
    animeData,
    selectedPreviousStatus,
  }
}

export { useChangingStatus }
