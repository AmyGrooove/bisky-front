import { getListStatusIcon } from '@entities/animeEstimate/utils'
import { IChangingStatusProps } from '../../types/IChangingStatusProps'

const useChangingStatus = (props: IChangingStatusProps) => {
  const { selectedStatus, posterHref } = props

  const ListIcon = getListStatusIcon(selectedStatus)

  return { selectedStatus, posterHref, ListIcon }
}

export { useChangingStatus }
