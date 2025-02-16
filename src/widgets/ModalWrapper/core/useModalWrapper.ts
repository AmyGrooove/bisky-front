import { useUnit } from 'effector-react'
import { useEffect } from 'react'

import { useDeviceType } from '@shared/utils/hooks'

import { $isModalClosing, $modal } from '../store/modalStore'
import {
  $additionalModal,
  $isAdditionalModalClosing,
} from '../store/additionalModalStore'

const useModalWrapper = () => {
  const modal = useUnit($modal)
  const additionalModal = useUnit($additionalModal)

  const isModalClosing = useUnit($isModalClosing)
  const isAdditionalModalClosing = useUnit($isAdditionalModalClosing)

  const { isMobile } = useDeviceType()

  const isOpen = modal !== null || additionalModal !== null

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (!isMobile) document.body.style.marginRight = isOpen ? '12px' : ''

    return () => {
      document.body.style.overflow = ''
      if (!isMobile) document.body.style.marginRight = ''
    }
  }, [modal, additionalModal])

  return {
    modal,
    additionalModal,
    isModalClosing,
    isAdditionalModalClosing,
    isMobile,
  }
}

export { useModalWrapper }
