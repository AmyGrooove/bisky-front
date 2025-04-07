import { MouseEvent, useEffect, useState } from 'react'

import { getListStatusIcon } from '@entities/animeEstimate/utils'
import { TListStatus } from '@entities/animeEstimate/types'

import { IAddInListButtonProps } from '../types/IAddInListButtonProps'
import { useTopLoader } from 'nextjs-toploader'
import { isNil } from '@shared/utils/functions'
import { setModal } from '@widgets/ModalWrapper'
import { AddInListModal } from '../../AddInListModal'
import { useCallNoAuthorize } from '@widgets/NoAuthorize'

const useAddInListButton = (props: IAddInListButtonProps) => {
  const { _id = null, selectedListStatus = null, className } = props

  const { done } = useTopLoader()

  const openNoAuthorize = useCallNoAuthorize()

  const [currentStatus, setCurrentStatus] = useState<
    TListStatus | 'skipped' | null
  >(selectedListStatus)

  const ListIcon = getListStatusIcon(currentStatus)

  const openModal = (event: MouseEvent<HTMLButtonElement>) => {
    if (isNil(_id) || currentStatus === 'skipped') return

    setTimeout(() => done(true), 0)
    event.preventDefault()
    event.stopPropagation()

    openNoAuthorize({
      thenCallback: () =>
        setModal(
          <AddInListModal
            selectedListStatus={currentStatus}
            _id={_id}
            setStatus={setCurrentStatus}
          />,
        ),
    })
  }

  useEffect(() => {
    if (selectedListStatus !== currentStatus)
      setCurrentStatus(selectedListStatus)
  }, [selectedListStatus])

  return {
    selectedListStatus,
    ListIcon,
    className,
    currentStatus,
    openModal,
  }
}

export { useAddInListButton }
