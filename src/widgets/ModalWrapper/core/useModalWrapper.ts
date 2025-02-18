import { useUnit } from 'effector-react'

import { $modal } from '../store/modalStore'
import { $additionalModal } from '../store/additionalModalStore'

const useModalWrapper = () => {
  const modal = useUnit($modal)
  const additionalModal = useUnit($additionalModal)

  return {
    modal,
    additionalModal,
  }
}

export { useModalWrapper }
