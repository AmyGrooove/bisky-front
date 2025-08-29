import { memo } from 'react'
import { Modal } from '@shared/ui/atoms/Modal'

import { closeModal } from '../store/modalStore'
import { closeAdditionalModal } from '../store/additionalModalStore'

import { useModalWrapper } from './useModalWrapper'

const ModalWrapper = memo(() => {
  const { modal, additionalModal } = useModalWrapper()

  return (
    <>
      <Modal closeFunction={closeModal}>{modal}</Modal>
      <Modal closeFunction={closeAdditionalModal}>{additionalModal}</Modal>
    </>
  )
})

ModalWrapper.displayName = 'ModalWrapper'

export { ModalWrapper }
