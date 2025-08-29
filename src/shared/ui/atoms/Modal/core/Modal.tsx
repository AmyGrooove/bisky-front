import { memo } from 'react'
import { isNil } from '@shared/utils/functions'

import { IModalProps } from '../types/IModalProps'

import { DesktopModal } from './DesktopModal/DesktopModal'
import { MobileModal } from './MobileModal/MobileModal'
import { useModal } from './useModal'

const Modal = memo((props: IModalProps) => {
  const { isPressed, closeFunction, children } = useModal(props)

  if (isNil(children)) return null

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
})

Modal.displayName = 'Modal'

export { Modal }
