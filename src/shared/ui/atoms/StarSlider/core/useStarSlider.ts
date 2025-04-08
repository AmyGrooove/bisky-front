import { PointerEvent, useRef } from 'react'
import { isNil } from '@shared/utils/functions'

import { IStarSliderProps } from '../types/IStarSliderProps'
import { TOTAL_STARS } from '../static/TOTAL_STARS'

const useStarSlider = (props: IStarSliderProps) => {
  const { className, currentStar, setCurrentStart } = props

  const containerRef = useRef<HTMLDivElement>(null)

  const calculateRating = (clientX: number) => {
    if (isNil(containerRef.current)) return 1

    const rect = containerRef.current.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const starWidth = rect.width / TOTAL_STARS

    let newRating = Math.ceil(relativeX / starWidth)
    if (newRating <= 0) newRating = 1
    if (newRating > TOTAL_STARS) newRating = TOTAL_STARS

    return newRating
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (isNil(containerRef.current)) return

    event.preventDefault()
    if (event.buttons === 0) return

    const newRating = calculateRating(event.clientX)
    setCurrentStart(newRating)
    containerRef.current.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (isNil(containerRef.current)) return

    if (event.pressure === 0) return

    const newRating = calculateRating(event.clientX)
    setCurrentStart(newRating)
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (isNil(containerRef.current)) return

    containerRef.current.releasePointerCapture(event.pointerId)
  }

  return {
    containerRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    currentStar,
    className,
  }
}

export { useStarSlider }
