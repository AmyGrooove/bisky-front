import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { acquireScrollLock, releaseScrollLock } from '@shared/utils/functions'

import { IModalSolutionProps } from '../../types/IModalSolutionProps'
import { useSwipeToClose } from '../../hooks/useSwipeToClose'

const useMobileModal = (props: IModalSolutionProps) => {
  const { children, closeFunction, isModalClosing } = props

  const modalRef = useRef<HTMLDivElement | null>(null)
  const [modalHeight, setModalHeight] = useState(1000)

  const isOpen = useMemo(() => children !== null, [children])
  const modalID = useMemo(() => (isOpen ? 'modal' : undefined), [isOpen])

  const {
    isDragging,
    offsetY,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useSwipeToClose({ closeFunction, isOpen })

  const modalDragStyle = useMemo<CSSProperties>(() => {
    if (isModalClosing)
      return {
        ['--modal-height' as any]: `${modalHeight}px`,
        ['--start-offset' as any]: `${offsetY}px`,
      }

    return {
      ['--modal-height' as any]: `${modalHeight}px`,
      transform: `translateY(${offsetY}px)`,
      transition: !isDragging ? 'transform 0.2s ease-out' : 'none',
    }
  }, [isModalClosing, modalHeight, offsetY, isDragging])

  useEffect(() => {
    if (modalRef.current) setModalHeight(modalRef.current.offsetHeight)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    acquireScrollLock()

    return () => {
      releaseScrollLock()
    }
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
    modalID,
  }
}

export { useMobileModal }
