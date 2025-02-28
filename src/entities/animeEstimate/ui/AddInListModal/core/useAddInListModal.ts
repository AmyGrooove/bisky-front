import { TListStatus } from '@entities/animeEstimate/types'
import { closeModal } from '@widgets/ModalWrapper'

import { IAddInListModalProps } from '../types/IAddInListModalProps'
import { useSetAnimeEstimate } from '@entities/animeEstimate/api/setAnimeEstimate'
import { useDeleteAnimeEstimate } from '@entities/animeEstimate/api/deleteAnimeEstimate'

const useAddInListModal = (props: IAddInListModalProps) => {
  const {
    _id,
    selectedListStatus = null,
    setStatus,
    excludedListStatuses = [],
  } = props

  const { mutateAsync: setAnimeEstimate } = useSetAnimeEstimate()
  const { mutateAsync: deleteAnimeEstimate } = useDeleteAnimeEstimate()

  const addAnimeInList = async (variant: TListStatus | null) => {
    closeModal()

    setStatus(variant)
    if (variant === null) await deleteAnimeEstimate({ animeID: _id })
    else await setAnimeEstimate({ animeID: _id, estimateVariant: variant })
  }

  return { selectedListStatus, addAnimeInList, excludedListStatuses }
}

export { useAddInListModal }
