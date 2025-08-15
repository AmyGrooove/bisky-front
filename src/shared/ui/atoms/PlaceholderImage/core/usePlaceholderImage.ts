import { useCallback, useEffect, useState, type TransitionEvent } from 'react'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'

const usePlaceholderImage = (props: IPlaceholderImageProps) => {
  const { src, className, alt = '', sizes } = props

  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setIsLoaded(false)
  }, [])

  const handleTransitionEnd = useCallback(
    (event: TransitionEvent<HTMLDivElement>) => {
      if (event.propertyName === 'opacity') setIsPlaceholderHidden(true)
    },
    [],
  )

  useEffect(() => {
    setIsLoaded(false)
    setIsPlaceholderHidden(false)
  }, [src])

  return {
    className,
    isPlaceholderHidden,
    isLoaded,
    src,
    alt,
    handleLoad,
    handleError,
    handleTransitionEnd,
    sizes,
  }
}

export { usePlaceholderImage }
