import { useState, useRef, useEffect, useCallback } from 'react'

import { IUseSwipeToClose } from '../types/IUseSwipeToClose'

const useSwipeToClose = (props: IUseSwipeToClose) => {
  const { closeFunction, threshold = 50, isOpen } = props

  const [offsetY, setOffsetY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startYRef = useRef(0)
  const offsetYRef = useRef(0)
  const isDraggingRef = useRef(false)

  const handleTouchStart = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      startYRef.current = event.touches[0].clientY
      isDraggingRef.current = true
      setIsDragging(true)
    },
    [],
  )

  const handleTouchMove = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current) return
      const currentY = event.touches[0].clientY
      const deltaY = currentY - startYRef.current
      offsetYRef.current = deltaY
      setOffsetY(deltaY)
    },
    [],
  )

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false
    setIsDragging(false)

    if (offsetYRef.current > threshold) closeFunction()
    else {
      offsetYRef.current = 0
      setOffsetY(0)
    }
  }, [threshold, closeFunction])

  useEffect(() => {
    if (isOpen) {
      offsetYRef.current = 0
      setOffsetY(0)
    }
  }, [isOpen])

  useEffect(() => {
    offsetYRef.current = offsetY
  }, [offsetY])

  return {
    offsetY,
    isDragging,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}

export { useSwipeToClose }
