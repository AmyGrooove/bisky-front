import { IModalProps } from '../types/IModalProps'

import { DesktopModal } from './DesktopModal/DesktopModal'
import { MobileModal } from './MobileModal/MobileModal'
import { useModal } from './useModal'

const Modal = (props: IModalProps) => {
  const { isPressed, handleDelayedClick, children } = useModal(props)

  return (
    <>
      <DesktopModal
        isModalClosing={isPressed}
        closeFunction={handleDelayedClick}
      >
        {children}
      </DesktopModal>
      <MobileModal
        isModalClosing={isPressed}
        closeFunction={handleDelayedClick}
      >
        {children}
      </MobileModal>
    </>
  )
}

export { Modal }
