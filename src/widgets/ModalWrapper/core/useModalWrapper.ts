import { useUnit } from 'effector-react'

import { $modal } from '../store/modalStore'
import { $additionalModal } from '../store/additionalModalStore'

const useModalWrapper = () => {
  const { modal, additionalModal } = useUnit({
    modal: $modal,
    additionalModal: $additionalModal,
  })

  return { modal, additionalModal }
}

export { useModalWrapper }
