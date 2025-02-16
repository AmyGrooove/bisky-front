import { useEffect, useRef, useState } from 'react'

import { useSwipeToClose } from '../../hook/useSwipeToClose'
import { IModalProps } from '../../types/IModalProps'

const useMobileModal = (props: IModalProps) => {
  const { children, closeFunction, isModalClosing } = props

  const modalRef = useRef<HTMLDivElement | null>(null)
  const [modalHeight, setModalHeight] = useState(1000)

  const isOpen = children !== null

  const {
    isDragging,
    offsetY,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useSwipeToClose({ closeFunction, isOpen })

  const modalDragStyle = isModalClosing
    ? {
        '--modal-height': `${modalHeight}px`,
        '--start-offset': `${offsetY}px`,
      }
    : {
        '--modal-height': `${modalHeight}px`,
        transform: `translateY(${offsetY}px)`,
        transition: !isDragging ? 'transform 0.2s ease-out' : 'none',
      }

  useEffect(() => {
    if (modalRef.current) setModalHeight(modalRef.current.offsetHeight)
  }, [isOpen])

  return {
    children,
    closeFunction,
    isModalClosing,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    modalDragStyle,
    modalRef,
  }
}

export { useMobileModal }
