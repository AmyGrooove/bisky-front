import { TListStatus } from '@entities/animeEstimate/types'
import { closeModal } from '@widgets/ModalWrapper'
import {
  deleteAnimeEstimate,
  setAnimeEstimate,
} from '@entities/animeEstimate/api'

import { IAddInListModalProps } from '../types/IAddInListModalProps'

const useAddInListModal = (props: IAddInListModalProps) => {
  const { _id, selectedListStatus = null, setStatus } = props

  const addAnimeInList = (variant: TListStatus | null) => {
    closeModal()

    if (setStatus) setStatus(variant)

    if (variant === null) deleteAnimeEstimate({ animeID: _id })
    else setAnimeEstimate({ animeID: _id, estimateVariant: variant })
  }

  return { selectedListStatus, addAnimeInList }
}

export { useAddInListModal }
