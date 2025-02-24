import { useState } from 'react'

import { getListStatusIcon } from '@entities/animeEstimate/utils'
import { TListStatus } from '@entities/animeEstimate/types'

import { IAddInListButtonProps } from '../types/IAddInListButtonProps'

const useAddInListButton = (props: IAddInListButtonProps) => {
  const { _id, selectedListStatus = null, className } = props

  const [currentStatus, setCurrentStatus] = useState<TListStatus | null>(
    selectedListStatus,
  )

  const ListIcon = getListStatusIcon(currentStatus)

  return {
    selectedListStatus,
    ListIcon,
    _id,
    className,
    currentStatus,
    setCurrentStatus,
  }
}

export { useAddInListButton }
