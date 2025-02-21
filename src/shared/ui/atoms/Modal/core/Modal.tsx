import { IModalProps } from '../types/IModalProps'

import { DesktopModal } from './DesktopModal/DesktopModal'
import { MobileModal } from './MobileModal/MobileModal'
import { useModal } from './useModal'

const Modal = (props: IModalProps) => {
  const { isPressed, closeFunction, children } = useModal(props)

  return (
    <>
      <DesktopModal isModalClosing={isPressed} closeFunction={closeFunction}>
        {children}
      </DesktopModal>
      <MobileModal isModalClosing={isPressed} closeFunction={closeFunction}>
        {children}
      </MobileModal>
    </>
  )
}

export { Modal }
