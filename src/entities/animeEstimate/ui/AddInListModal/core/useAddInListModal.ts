import { TListStatus } from '@entities/animeEstimate/types'
import { closeModal } from '@widgets/ModalWrapper'
import {
  deleteAnimeEstimate,
  setAnimeEstimate,
} from '@entities/animeEstimate/api'

import { IAddInListModalProps } from '../types/IAddInListModalProps'

const useAddInListModal = (props: IAddInListModalProps) => {
  const { _id, selectedListStatus, setStatus } = props

  const addAnimeInList = async (variant: TListStatus | null) => {
    closeModal()

    setStatus(variant)
    if (variant === null) await deleteAnimeEstimate({ animeID: _id })
    else await setAnimeEstimate({ animeID: _id, estimateVariant: variant })
  }

  return { selectedListStatus, addAnimeInList }
}

export { useAddInListModal }
