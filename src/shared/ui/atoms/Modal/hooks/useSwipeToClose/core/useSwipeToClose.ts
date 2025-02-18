import { useState, useRef, useEffect } from 'react'

import { IUseSwipeToClose } from '../types/IUseSwipeToClose'

const useSwipeToClose = (props: IUseSwipeToClose) => {
  const { closeFunction, threshold = 50, isOpen } = props

  const [offsetY, setOffsetY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startYRef = useRef(0)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startYRef.current = e.touches[0].clientY
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const currentY = e.touches[0].clientY
    const deltaY = currentY - startYRef.current
    setOffsetY(deltaY)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)

    if (offsetY > threshold) closeFunction()
    else setOffsetY(0)
  }

  useEffect(() => {
    if (isOpen) setOffsetY(0)
  }, [isOpen])

  return {
    offsetY,
    isDragging,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}

export { useSwipeToClose }
