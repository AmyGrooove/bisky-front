import { setModal } from '@widgets/ModalWrapper'
import { AddInListModal } from '@entities/anime/ui/AddInListModal'
import { MouseEvent, useCallback, useState } from 'react'
import { ESTIMATE_DATA } from '@entities/anime/static/ESTIMATE_DATA'
import { useTopLoader } from 'nextjs-toploader'
import { useAuthGate } from '@entities/auth/hooks/useAuthGate'

import { IUpdateEstimateButtonProps } from '../types/IUpdateEstimateButtonProps'

const useUpdateEstimateButton = (props: IUpdateEstimateButtonProps) => {
  const {
    currentUserAnimeStatus,
    className,
    animeID,
    isEllipsisIcon = false,
  } = props

  const { done } = useTopLoader()

  const { guardCall } = useAuthGate()

  const [currentStatus, setCurrentStatus] = useState<
    keyof typeof ESTIMATE_DATA
  >(currentUserAnimeStatus ?? 'noSelected')

  const openModal = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      setTimeout(() => done(true), 0)

      guardCall(() => {
        const convertedStatus =
          currentStatus === 'noSelected' ? 'delete' : currentStatus

        setModal(
          <AddInListModal
            selectedListStatus={convertedStatus}
            animeID={animeID}
            setStatus={setCurrentStatus}
            excludedListStatuses={['noSelected']}
          />,
        )
      })()
    },
    [animeID, currentStatus, done],
  )

  return { className, currentStatus, openModal, isEllipsisIcon }
}

export { useUpdateEstimateButton }
