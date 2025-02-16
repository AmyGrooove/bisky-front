'use client'

import { closeModal } from '../store/modalStore'
import { closeAdditionalModal } from '../store/additionalModalStore'

import { useModalWrapper } from './useModalWrapper'
import { DesktopModal } from './DesktopModal/DesktopModal'
import { MobileModal } from './MobileModal/MobileModal'


const ModalWrapper = () => {
  const {
    modal,
    additionalModal,
    isModalClosing,
    isAdditionalModalClosing,
    isMobile,
  } = useModalWrapper()

  return (
    <>
      {!isMobile ? (
        <DesktopModal
          isModalClosing={isModalClosing}
          closeFunction={() => closeModal()}
        >
          {modal}
        </DesktopModal>
      ) : (
        <MobileModal
          isModalClosing={isModalClosing}
          closeFunction={() => closeModal()}
        >
          {modal}
        </MobileModal>
      )}
      {!isMobile ? (
        <DesktopModal
          isModalClosing={isAdditionalModalClosing}
          closeFunction={() => closeAdditionalModal()}
        >
          {additionalModal}
        </DesktopModal>
      ) : (
        <MobileModal
          isModalClosing={isAdditionalModalClosing}
          closeFunction={() => closeAdditionalModal()}
        >
          {additionalModal}
        </MobileModal>
      )}
    </>
  )
}

export { ModalWrapper }
